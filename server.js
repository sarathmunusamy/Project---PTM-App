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

const router = express.Router();

function readDomainFile(callback) {
  fs.readFile("./Data/DomainList.xml", function(err, data) {
    var json = JSON.parse(parser.toJson(data, { reversible: true }));
    callback(json);
  });
}

app.post("/api/getAllTask", (req, res) => {
  readDomainFile(function(data){
    return res.send(data);
  });


});

app.listen(port, () => console.log(`Listening on port ${port}`));
