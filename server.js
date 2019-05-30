const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

var fs = require("fs");
var parser = require("xml2json");

const path = require("path");
const multer = require("multer");
var localStorgae = require("localStorage");
var targetPath = "";
const svg2vectordrawable = require("svg2vectordrawable/lib/svg-file-to-vectordrawable-file");
var busboy = require("connect-busboy");
//...

var XmlFileURL,
  xmlResponse,
  imageURI,
  appName,
  appColor,
  cachedPlistURL,
  rgbValue;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(busboy());

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "../" + baseURL + "/" + req.headers.path);
  },
  filename: function(req, file, cb) {
    cb(
      null,
      req.headers["type"] == "image/svg+xml"
        ? req.headers["svgname"]
        : req.headers["name"]
    );
  }
});

function getURL() {
  return XmlFileURL;
}

function getResponse() {
  return xmlResponse;
}

function getImageURI() {
  return imageURI;
}

function getPlistURL() {
  return cachedPlistURL;
}

function getrgbValue() {
  return rgbValue;
}

function ChangeColorCode(json) {
  if (json["vector"]["group"])
    json["vector"]["group"]["path"]["android:fillColor"] = appColor;
  else {
    if (!json["vector"]["path"].hasOwnProperty("length"))
      json["vector"]["path"]["android:fillColor"] = appColor;
    else {
      for (var i = 0; i < json["vector"]["path"].length; i++) {
        json["vector"]["path"][i]["android:fillColor"] = appColor;
      }
    }
  }
  return json;
}

function ChangeResourceString(json) {
  json["resources"]["string"][0]["$t"] = appName;
  return json;
}

function changeCustomFile(json) {
  for (var i = 0; i < json["resources"]["color"].length; i++) {
    var currentName = json["resources"]["color"][i].name;

    if (
      currentName == "activity_background" ||
      currentName == "blue_mlight" ||
      currentName == "blue_light" ||
      currentName == "blue_normal" ||
      currentName == "blue_stroke" ||
      currentName == "blue_dark"
    )
      json["resources"]["color"][i].$t = appColor;
  }

  return json;
}

const changePlistFiles = function(req, res) {
  cachedPlistURL = req.headers.url;
  xmlResponse = res;

  //var rgbValue = getRGBfromHex(colorCode);

  fs.readFile("../m-files-ios/" + req.headers.url, function(err, data) {
    var stringData = data.toString("utf8");
    stringData = stringData.replace("M-Files", req.headers.appname);

    fs.writeFile("../m-files-ios/" + getPlistURL(), stringData, function(
      err,
      data
    ) {
      if (err) {
        console.log(err);
      } else {
        if (!err) {
          var res = getResponse();

          console.log("last req." + req.headers.url);
          return res.send(200).end();
        }
      }
    });
  });
};

const getRGBfromHex = function(value) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

const changeiOSColor = function(req, res) {
  cachedPlistURL = req.headers.url;
  xmlResponse = res;

  var colorCode = req.headers.appcolor;

  rgbValue = getRGBfromHex(colorCode);

  fs.readFile("../m-files-ios/" + req.headers.url, function(err, data) {
    var rgbValue = getrgbValue();
    var newValue =
      "colorWithRed:" +
      rgbValue.r +
      ".0f / 255.0f green:" +
      rgbValue.g +
      ".0f / 255.0f blue:" +
      rgbValue.b +
      ".0f / 255.0f ";

    var stringData = data.toString("utf8");
    stringData = stringData.replace(
      "colorWithRed:0.0f / 255.0f green:125.0f / 255.0f blue:198.0f / 255.0f ",
      newValue
    );
    stringData = stringData.replace(
      "colorWithRed:236.0f / 255.0f green:246.0f / 255.0f blue:252.0f / 255.0f ",
      newValue
    );
    stringData = stringData.replace(
      "colorWithRed:73.0f / 255.0f green:168.0f / 255.0f blue:224.0f / 255.0f ",
      newValue
    );

    stringData = stringData.replace(
      "colorWithRed:65.0f / 255.0f green:85.0f / 255.0f blue:96.0f / 255.0f ",
      newValue
    );
    fs.writeFile("../m-files-ios/" + getPlistURL(), stringData, function(
      err,
      data
    ) {
      if (err) {
        console.log(err);
      } else {
        if (!err) {
          var res = getResponse();

          console.log("last req." + req.headers.url);
          return res.send(200).end();
        }
      }
    });
  });
};

const changingXMLFile = function(req, res, isColorChange) {
  XmlFileURL = req.headers.url;
  xmlResponse = res;
  appName = req.headers.appname;
  appColor = req.headers.appcolor;

  fs.readFile("../m-files-android/" + req.headers.url, function(err, data) {
    console.log();
    var json = JSON.parse(parser.toJson(data, { reversible: true }));
    if (isColorChange == "color") {
      json = ChangeColorCode(json);
    } else if (isColorChange == "string") {
      json = ChangeResourceString(json);
    } else if (isColorChange == "custom") {
      json = changeCustomFile(json);
    }

    var stringified = JSON.stringify(json);

    stringified = stringified.replace(
      "https://www.server.company.com&key=ABC",
      "https://www.server.company.com&amp;key=ABC"
    );

    var xml = parser.toXml(stringified);
    xml = '<?xml version="1.0" encoding="utf-8"?>' + xml;
    fs.writeFile("../m-files-android/" + getURL(), xml, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        if (!err) {
          var res = getResponse();

          console.log("last req." + req.headers.url);
          return res.send(200).end();
        }
      }
    });
  });
};

const router = express.Router();

app.post("/api/upload", (req, res) => {
  targetPath = req.headers.url;
  baseURL = req.headers.baseurl;

  // if (req.headers["type"] == "image/png") {
  const upload = multer({
    storage: storage,
    limits: { fileSize: 100000000 }
  }).single("myImage");

  upload(req, res, err => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file); //Here you get file.
    /*Now do where ever you want to do*/

    if (
      req.file.mimetype != "image/png" &&
      req.file.mimetype != "application/pdf"
    ) {
      var inputDir =
        "../" + baseURL + "/" + req.headers.path + "/" + req.headers.svgname;
      var outputdir =
        "../" + baseURL + "/" + req.headers.path + "/" + req.headers.name;

      svg2vectordrawable(inputDir, outputdir);
    }

    if (!err) return res.send(200).end();
  });
});

app.post("/api/ChangePlistFiles", (req, res) => {
  changePlistFiles(req, res);
});

app.post("/api/changeAppColor", (req, res) => {
  changingXMLFile(req, res, "color");
});

app.post("/api/changeResourceString", (req, res) => {
  changingXMLFile(req, res, "string");
});

app.post("/api/customFileChange", (req, res) => {
  changingXMLFile(req, res, "custom");
});

app.post("/api/changeiOSColor", (req, res) => {
  changeiOSColor(req, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
