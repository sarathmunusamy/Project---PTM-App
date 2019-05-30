import React, { Component } from "react";
import { Tab, IconGroup } from "semantic-ui-react";
import IOSComponent from "./IOSComponent.jsx";
import axios from "axios";
import AndroidComponent from "./AndroidComponent";
import jquery from "jquery";
import { isatty } from "tty";
import LoadingOverlay from "react-loading-overlay";
import SvgLoader from "./SvgLoader.jsx";

class MainPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totallFiles: [],
      iconXMLFiles: [
        "mFiles/src/main/res/drawable-ldrtl/send_s1_blue.xml",
        "mFiles/src/main/res/drawable/check_mark_s1_blue.xml",

        "mFiles/src/main/res/drawable/chevron_down_s1_blue.xml",

        "mFiles/src/main/res/drawable/chevron_left_s1_blue.xml",

        "mFiles/src/main/res/drawable/chevron_right_s1_blue.xml",

        "mFiles/src/main/res/drawable/chevron_up_s1_blue.xml",

        "mFiles/src/main/res/drawable/comments_s1_blue.xml",

        "mFiles/src/main/res/drawable/controls_s1_blue.xml",

        "mFiles/src/main/res/drawable/create_s1_blue.xml",

        "mFiles/src/main/res/drawable/create_s1_blue_small.xml",

        "mFiles/src/main/res/drawable/delete_s1_blue.xml",

        "mFiles/src/main/res/drawable/downloads_s1_blue.xml",

        "mFiles/src/main/res/drawable/ellipsis_s1_blue.xml",

        "mFiles/src/main/res/drawable/pen_s1_blue.xml",

        "mFiles/src/main/res/drawable/plus_s1_blue.xml",

        "mFiles/src/main/res/drawable/qr_s1_blue.xml",

        "mFiles/src/main/res/drawable/refresh_s1_blue.xml",

        "mFiles/src/main/res/drawable/relationships_s1_blue.xml",

        "mFiles/src/main/res/drawable/save_s1_blue.xml",

        "mFiles/src/main/res/drawable/send_s1_blue.xml",

        "mFiles/src/main/res/drawable/trashbin_s1_blue.xml",
        "mFiles/src/main/res/drawable/workflows_s1_blue.xml",
        "mFiles/src/main/res/drawable/tag_s1_blue.xml",
        "mFiles/src/main/res/drawable/magnifier_s1_blue.xml",
        "mFiles/src/main/res/drawable/copy_to_clipboard_s1_blue.xml"
      ],

      resourceTextFiles: [
        "mFiles/src/main/res/values-ar/strings.ar-JO.xml",
        "mFiles/src/main/res/values-bg/strings.bg-BG.xml",
        "mFiles/src/main/res/values-cs/strings.cs-CZ.xml",
        "mFiles/src/main/res/values-da/strings.da-DK.xml",
        "mFiles/src/main/res/values-de/strings.de-DE.xml",
        "mFiles/src/main/res/values-el/strings.el-GR.xml",
        "mFiles/src/main/res/values-en/strings.en-US.xml",
        // "mFiles/src/main/res/values-es/strings.es-ES.xml",
        "mFiles/src/main/res/values-et/strings.et-EE.xml",
        "mFiles/src/main/res/values-fa/strings.fa-IR.xml",
        "mFiles/src/main/res/values-fi/strings.fi-FI.xml",
        "mFiles/src/main/res/values-fr/strings.fr-FR.xml",
        "mFiles/src/main/res/values-he/strings.he-IL.xml",
        "mFiles/src/main/res/values-hr/strings.hr-HR.xml",
        "mFiles/src/main/res/values-hu/strings.hu-HU.xml",
        "mFiles/src/main/res/values-it/strings.it-IT.xml",
        "mFiles/src/main/res/values-ja/strings.ja-JP.xml",
        "mFiles/src/main/res/values-ko/strings.ko-KR.xml",
        "mFiles/src/main/res/values-nb/strings.nb-NO.xml",
        "mFiles/src/main/res/values-nl/strings.nl-NL.xml",
        "mFiles/src/main/res/values-pl/strings.pl-PL.xml",
        "mFiles/src/main/res/values-pt/strings.pt-BR.xml",
        "mFiles/src/main/res/values-ro/strings.ro-RO.xml",
        "mFiles/src/main/res/values-ru/strings.ru-RU.xml",
        "mFiles/src/main/res/values-sk/strings.sk-SK.xml",
        "mFiles/src/main/res/values-sl/strings.sl-SI.xml",
        // "mFiles/src/main/res/values-sq/strings.sq-AL.xml",
        "mFiles/src/main/res/values-sv/strings.sv-SE.xml",
        // "mFiles/src/main/res/values-th/strings.th-TH.xml",
        "mFiles/src/main/res/values-tr/strings.tr-TR.xml",
        "mFiles/src/main/res/values-uk/strings.uk-UA.xml",
        "mFiles/src/main/res/values-vi/strings.vi-VN.xml",
        "mFiles/src/main/res/values-zh-rCN/strings.zh-CN.xml",
        "mFiles/src/main/res/values-zh-rTW/strings.zh-TW.xml",
        "mFiles/src/main/res/values/strings.xml"
      ],

      iosPlistFiles: [
        "M-Files Document Provider/ar.lproj/InfoPlist.strings",
        "M-Files Document Provider/bg.lproj/InfoPlist.strings",
        "M-Files Document Provider/cs.lproj/InfoPlist.strings",
        "M-Files Document Provider/da.lproj/InfoPlist.strings",
        "M-Files Document Provider/de.lproj/InfoPlist.strings",
        "M-Files Document Provider/el.lproj/InfoPlist.strings",
        "M-Files Document Provider/en.lproj/InfoPlist.strings",
        "M-Files Document Provider/en.lproj/InfoPlist_proof.strings",
        "M-Files Document Provider/es.lproj/InfoPlist.strings",
        "M-Files Document Provider/et.lproj/InfoPlist.strings",
        "M-Files Document Provider/fa.lproj/InfoPlist.strings",
        "M-Files Document Provider/fi.lproj/InfoPlist.strings",
        "M-Files Document Provider/fr.lproj/InfoPlist.strings",
        "M-Files Document Provider/he.lproj/InfoPlist.strings",
        "M-Files Document Provider/hr.lproj/InfoPlist.strings",
        "M-Files Document Provider/hu.lproj/InfoPlist.strings",
        "M-Files Document Provider/it.lproj/InfoPlist.strings",
        "M-Files Document Provider/ja.lproj/InfoPlist.strings",
        "M-Files Document Provider/ko.lproj/InfoPlist.strings",
        "M-Files Document Provider/nb.lproj/InfoPlist.strings",
        "M-Files Document Provider/nl.lproj/InfoPlist.strings",
        "M-Files Document Provider/pl.lproj/InfoPlist.strings",
        "M-Files Document Provider/pt.lproj/InfoPlist.strings",
        "M-Files Document Provider/ro.lproj/InfoPlist.strings",
        "M-Files Document Provider/ru.lproj/InfoPlist.strings",
        "M-Files Document Provider/sk.lproj/InfoPlist.strings",
        "M-Files Document Provider/sl.lproj/InfoPlist.strings",
        "M-Files Document Provider/sq.lproj/InfoPlist.strings",
        "M-Files Document Provider/sr.lproj/InfoPlist.strings",
        "M-Files Document Provider/sv.lproj/InfoPlist.strings",
        "M-Files Document Provider/th.lproj/InfoPlist.strings",
        "M-Files Document Provider/tr.lproj/InfoPlist.strings",
        "M-Files Document Provider/uk.lproj/InfoPlist.strings",
        "M-Files Document Provider/vi.lproj/InfoPlist.strings",
        "M-Files Document Provider/zh-Hans.lproj/InfoPlist.strings",
        "M-Files Document Provider/zh-Hant.lproj/InfoPlist.strings",
        "M-Files Document Provider/zh.lproj/InfoPlist.strings",

        "M-Files/ar.lproj/InfoPlist.strings",
        "M-Files/bg.lproj/InfoPlist.strings",
        "M-Files/cs.lproj/InfoPlist.strings",
        "M-Files/da.lproj/InfoPlist.strings",
        "M-Files/de.lproj/InfoPlist.strings",
        "M-Files/el.lproj/InfoPlist.strings",
        "M-Files/en.lproj/InfoPlist.strings",
        "M-Files/en.lproj/InfoPlist_proof.strings",
        "M-Files/es.lproj/InfoPlist.strings",
        "M-Files/et.lproj/InfoPlist.strings",
        "M-Files/fa.lproj/InfoPlist.strings",
        "M-Files/fi.lproj/InfoPlist.strings",
        "M-Files/fr.lproj/InfoPlist.strings",
        "M-Files/he.lproj/InfoPlist.strings",
        "M-Files/hr.lproj/InfoPlist.strings",
        "M-Files/hu.lproj/InfoPlist.strings",
        "M-Files/it.lproj/InfoPlist.strings",
        "M-Files/ja.lproj/InfoPlist.strings",
        "M-Files/ko.lproj/InfoPlist.strings",
        "M-Files/nb.lproj/InfoPlist.strings",
        "M-Files/nl.lproj/InfoPlist.strings",
        "M-Files/pl.lproj/InfoPlist.strings",
        "M-Files/pt.lproj/InfoPlist.strings",
        "M-Files/ro.lproj/InfoPlist.strings",
        "M-Files/ru.lproj/InfoPlist.strings",
        "M-Files/sk.lproj/InfoPlist.strings",
        "M-Files/sl.lproj/InfoPlist.strings",
        "M-Files/sq.lproj/InfoPlist.strings",
        "M-Files/sr-Cyrl.lproj/InfoPlist.strings",
        "M-Files/sr-Latn.lproj/InfoPlist.strings",
        "M-Files/sv.lproj/InfoPlist.strings",
        "M-Files/th.lproj/InfoPlist.strings",
        "M-Files/tr.lproj/InfoPlist.strings",
        "M-Files/uk.lproj/InfoPlist.strings",
        "M-Files/vi.lproj/InfoPlist.strings",
        "M-Files/zh-Hans.lproj/InfoPlist.strings",
        "M-Files/zh-Hant.lproj/InfoPlist.strings"
      ],
      iosColorChange: ["M-Files/Source/Categories/UIColor+MFColors.m"],

      replaceVectorImages: ["mFiles/src/main/res/values/colors.xml"],

      requiredImages: [],
      svgFiles: [],
      pngFiles: [],
      currentProcessCall: "",
      operationInProgress: false,
      currentproccessingFile: "",
      proccessCompleted: false
    };
    this.uploadDetails = this.uploadDetails.bind(this);
    this.Doupload = this.Doupload.bind(this);
    this.getNextXMLFile = this.getNextXMLFile.bind(this);
    this.ChangeAppColor = this.ChangeAppColor.bind(this);
    this.getInitialResourceFile = this.getInitialResourceFile.bind(this);
    this.getCurrentProccessCall = this.getCurrentProccessCall.bind(this);
    this.getInitialXmlURL = this.getInitialXmlURL.bind(this);
    this.getInitialiOSColoFile = this.getInitialiOSColoFile.bind(this);
    this.changeRequiredIOSChanges = this.changeRequiredIOSChanges.bind(this);
  }

  uploadDetails(files, otherDetails, isAndroid) {
    // window.localStorage["IOSFiles"] = JSON.stringify(files);
    window.localStorage["FileIndex"] = 0;

    window.localStorage["totalFiles"] = files.length;

    window.localStorage["colorXMLFileIndex"] = 0;

    window.localStorage["AppName"] = otherDetails.appName;
    window.localStorage["AppColor"] = otherDetails.appColor;

    this.state.totallFiles = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].file) {
        this.state.totallFiles.push(files[i]);
      }
    }

    this.setState({
      currentProcessCall: "image/svg",
      operationInProgress: true
    });

    this.Doupload(this.state.totallFiles[0], isAndroid, function(self) {
      if (isAndroid) {
        self.setState({ currentProcessCall: "icon" });
        self.ChangeAppColor(self.state.iconXMLFiles[0]);
      } else {
        self.setState({ currentProcessCall: "iOSPlist" });
        self.changeRequiredIOSChanges(self.state.iosPlistFiles[0]);
      }
    });
  }

  getNextXMLFile(index) {
    if (this.state.currentProcessCall == "icon")
      return this.state.iconXMLFiles[index];
    else if (this.state.currentProcessCall == "image/svg")
      return this.state.totallFiles[index];
    else if (this.state.currentProcessCall == "XMLURL")
      return this.state.replaceVectorImages[index];
    else return this.state.resourceTextFiles[index];
  }

  getNextiOSFile(index) {
    if (this.state.currentProcessCall == "iOSPlist")
      return this.state.iosPlistFiles[index];
    else if (this.state.currentProcessCall == "iOSColor")
      return this.state.iosColorChange[index];
  }

  getInitialResourceFile() {
    this.setState({
      currentProcessCall: "resourceFile"
    });

    return this.state.resourceTextFiles[0];
  }

  getInitialiOSColoFile() {
    this.setState({
      currentProcessCall: "iOSColor"
    });

    return this.state.iosColorChange[0];
  }

  getInitialXmlURL() {
    this.setState({
      currentProcessCall: "XMLURL"
    });

    return this.state.replaceVectorImages[0];
  }

  getCurrentProccessCall() {
    return this.state.currentProcessCall;
  }

  changeRequiredIOSChanges(tempFormData) {
    var config = new Object();

    var currentURL;

    this.setState({
      currentproccessingFile: tempFormData
    });

    config = {
      headers: {
        "content-type": "text/plain",
        url: tempFormData,
        appName: window.localStorage["AppName"],
        appColor: window.localStorage["AppColor"]
      }
    };

    if (this.state.currentProcessCall == "iOSPlist")
      currentURL = "ChangePlistFiles";
    else if (this.state.currentProcessCall == "iOSColor")
      currentURL = "changeiOSColor";

    axios
      .post("/api/" + currentURL, tempFormData, config)
      .then(response => {
        window.localStorage["colorXMLFileIndex"] =
          parseInt(window.localStorage["colorXMLFileIndex"]) + 1;

        var nextFile = this.getNextiOSFile(
          parseInt(window.localStorage["colorXMLFileIndex"])
        );

        if (nextFile) {
          this.changeRequiredIOSChanges(nextFile);
        } else {
          window.localStorage["colorXMLFileIndex"] = "0";
          if (this.getCurrentProccessCall() == "iOSPlist")
            this.changeRequiredIOSChanges(this.getInitialiOSColoFile());
          else if (this.getCurrentProccessCall() == "iOSColor") {
            //this.setState({ operationInProgress: false });\
            this.setState({proccessCompleted: true});

          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  ChangeAppColor(tempFormData, isImage) {
    var currentURL = "";
    var config = new Object();

    this.setState({
      currentproccessingFile: tempFormData
    });

    //if (this.state.currentProcessCall != "image/svg") {
    config = {
      headers: {
        "content-type": "text/plain",
        url: tempFormData,
        appName: window.localStorage["AppName"],
        appColor: window.localStorage["AppColor"]
      }
    };
    // }

    if (this.state.currentProcessCall == "icon") currentURL = "changeAppColor";
    else if (this.state.currentProcessCall == "resourceFile")
      currentURL = "changeResourceString";
    else if (this.state.currentProcessCall == "XMLURL")
      currentURL = "customFileChange";

    axios
      .post("/api/" + currentURL, tempFormData, config)
      .then(response => {
        window.localStorage["colorXMLFileIndex"] =
          parseInt(window.localStorage["colorXMLFileIndex"]) + 1;

        var nextFile = this.getNextXMLFile(
          parseInt(window.localStorage["colorXMLFileIndex"])
        );

        if (nextFile) {
          this.ChangeAppColor(nextFile);
        } else {

          window.localStorage["colorXMLFileIndex"] = "0";

          if (this.getCurrentProccessCall() == "icon")
            this.ChangeAppColor(this.getInitialResourceFile());
          else if (this.getCurrentProccessCall() == "resourceFile")
            this.ChangeAppColor(this.getInitialXmlURL());
          else if (this.getCurrentProccessCall() == "XMLURL") {
            // this.setState({ operationInProgress: false });

            this.setState({proccessCompleted: true});
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  Doupload(file, isAndroid, callback) {
    var FR = new FileReader();

    var tempFormData = new FormData();
    var url;

    this.setState({
      currentproccessingFile: file.actualName
    });
    tempFormData.append("myImage", file.file);
    url = "/api/upload";

    var baseURL = isAndroid ? "m-files-android" : "m-files-ios";

    if (file.file.type == "image/png" || file.file.type == "application/pdf") {
      var config = {
        headers: {
          // "content-type": "multipart/form-data",
          enctype: "multipart/form-data",
          path: file.url,
          name: file.actualName,
          type: file.file.type,
          baseURL: baseURL
        }
      };
    } else if (file.file.type == "image/svg+xml") {
      var svgFile = JSON.stringify(file.file);

      var config = {
        headers: {
          "content-type": "multipart/form-data",
          path: file.url,
          name: file.actualName,
          svgName: file.svgName,
          type: file.file.type,
          svgFile: svgFile,
          baseURL: baseURL
        }
      };

      // jquery.get(file.file, function(data) {
      //   var svg_data = data.childNodes;
      // });
    }
    if (url) {
      axios
        .post(url, tempFormData, config)
        .then(response => {
          window.localStorage["FileIndex"] =
            parseInt(window.localStorage["FileIndex"]) + 1;

          if (
            parseInt(window.localStorage["FileIndex"]) <
            parseInt(window.localStorage["totalFiles"]) - 1
          ) {
            var nextFile = this.getNextXMLFile(
              parseInt(window.localStorage["FileIndex"])
            );

            if (nextFile) this.Doupload(nextFile, isAndroid, callback);
            else callback(this);
          } else {
            callback(this);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    // });

    // FR.readAsDataURL(file.file);
  }

  render() {
    var panes = [
      {
        menuItem: { icon: "apple", content: "IOS" },
        render: () => (
          <Tab.Pane>
            <IOSComponent onSubmit={this.uploadDetails} />
          </Tab.Pane>
        )
      },
      {
        menuItem: { icon: "android", content: "Android" },
        render: () => (
          <Tab.Pane>
            <AndroidComponent onSubmit={this.uploadDetails} />
          </Tab.Pane>
        )
      }
    ];
    return (
      <LoadingOverlay
        active={this.state.operationInProgress}
        spinner={
          <SvgLoader
            currentFile={this.state.currentproccessingFile}
            isCompleted={this.state.proccessCompleted}
          />
        }
      >
        <Tab panes={panes} />
      </LoadingOverlay>
    );
  }
}

export default MainPageComponent;
