import React, { Component } from "react";
import logo from "./logo.svg";

import {
  Segment,
  Divider,
  Input,
  Form,
  Grid,
  Image,
  Container,
  Button,
  Icon,
  Header,
  Label,
  ItemDescription
} from "semantic-ui-react";

import GridComponent from "./GridComponent.jsx";
import GridRowComponent from "./GridRowComponent.jsx";
import GridColumnComponent from "./GridColumnComponent.jsx";
import ColorPickerInput from "./ColorPickerInput.jsx";
import ImageUploadPlaceHolder from "./ImageuploadPlaceHolder.jsx";
import update from "react-addons-update";
import MainPageComponent from "./MainPageComponent.jsx";

class IOSComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryColor: "#FFF",
      secondaryColor: "#FFF",
      textImageSize: [
        { width: 240, height: 60, dimension: "240 X 60", file: "" },
        { width: 112, height: 36, dimension: "112 X 36", file: "" },
        { width: 112, height: 24, dimension: "112 X 24", file: "" }
      ],

      appIconSize: [
        {
          width: 29,
          height: 29,
          dimension: "29 X 29",
          actualName: "mfiles_app_icon_29.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 40,
          height: 40,
          dimension: "40 X 40",
          actualName: "mfiles_app_icon_40.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 58,
          height: 58,
          dimension: "58 X 58",
          actualName: "mfiles_app_icon_58.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 76,
          height: 76,
          dimension: "76 X 76",
          actualName: "mfiles_app_icon_76.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 80,
          height: 80,
          dimension: "80 X 80",
          actualName: "mfiles_app_icon_80.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 87,
          height: 87,
          dimension: "87 X 87",
          actualName: "mfiles_app_icon_87.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 120,
          height: 120,
          dimension: "120 X 120",
          actualName: "mfiles_app_icon_120.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 152,
          height: 152,
          dimension: "152 X 152",
          actualName: "mfiles_app_icon_152.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 180,
          height: 180,
          dimension: "180 X 180",
          actualName: "mfiles_app_icon_180.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        },
        {
          width: 1024,
          height: 1024,
          dimension: "1024 X 1024",
          actualName: "mfiles_app_icon_1024.png",
          url: "M-Files/Images.xcassets/AppIcon.appiconset",
          file: ""
        }
      ],

      totallFiles: [],
      requiredPDFFiles: [
        {
          actualName: "mfiles_ImageLogo.pdf",
          url: "M-Files/Images.xcassets/mfiles_ImageLogo.imageset",
          imageURL: "/Images/mfiles_logo_s1_blue.png",

          description:
            "This icon will display at bottom of the taskpane and will replace bellow icon ",
          file: ""
        },
        {
          actualName: "mfiles_ImageLogo_pad.pdf",
          url: "M-Files/Images.xcassets/mfiles_ImageLogo_pad.imageset",
          imageURL: "/Images/mfiles_logo_s1_blue.png",

          description:
            "This icon will display at bottom of the taskpane and will replace bellow icon ",
          file: ""
        },
        {
          actualName: "mfiles_TextLogo_blue.pdf",
          url: "M-Files/Images.xcassets/mfiles_TextLogo_blue.imageset",
          imageURL: "/Images/mfiles_logo_blue.png",
          description:
            "This icon will display in the about page and will replace the following icon",
          file: ""
        },
        {
          actualName: "mfiles_TextLogo_blue_pad.pdf",
          url: "M-Files/Images.xcassets/mfiles_TextLogo_blue_pad.imageset",
          imageURL: "/Images/mfiles_logo_blue.png",
          description:
            "This icon will display in the about page and will replace the following icon",
          file: ""
        },
        {
          actualName: "mfiles_bg.pdf",
          url: "M-Files/Images.xcassets/mfiles_bg.imageset",
          imageURL: "/Images/bg.png",
          description: "This file will work as background for the app.",
          file: ""
        },
        {
          actualName: "mfiles_logo.pdf",
          url: "M-Files/Images.xcassets/mfiles_logo.imageset",
          imageURL:"/Images/mfiles_logo.PNG",
          description:"This icon will display in the login page",
          file: ""
        },
        {
          actualName: "mfiles_logo_main.pdf",
          url: "M-Files/Images.xcassets/mfiles_logo_main .imageset",
          imageURL:"/Images/mfiles_logo.PNG",
          description:"This icon will display in the login page for iPAD",
          file: ""
        }
      ]
    };

    this.cacheFile = this.cacheFile.bind(this);
  }

  cacheFile(file, arrayList, index) {
    var targetKey;

    Object.keys(this.state).map(function(key) {
      if (key == arrayList) {
        targetKey = key;
      }
    });

    let newState = Object.assign({}, this.state[targetKey]);
    newState[index].file = file;

    this.setState({
      targetKey: newState
    });
  }
  onFormSubmit() {
    var files = [];

    for (var a in this.state) {
      var property = this.state[a];

      if (typeof property == "object") {
        for (var i = 0; i < property.length; i++) {
          // var tempProperty = property[i];
          files.push(property[i]);
        }
      }
    }

    var OtherDetails = {
      appName: document.getElementsByName("AppName")[0].value,
      appColor: document.getElementsByName("primaryColor")[0].value
    };

    this.props.onSubmit(files, OtherDetails, false);

    //this.uploadDetails(files);
  }
  ColorChanged(color, Field) {
    const $ = window.$;
    $("input[name=" + Field + "]").val(color);
  }

  render() {
    return (
      <div>
        <Divider horizontal>App Name</Divider>
        <GridComponent>
          <Form>
            <GridRowComponent>
              <GridColumnComponent width={6}>
                <Form.Field>
                  <label>New App Name</label>
                  <Input name="AppName" />
                </Form.Field>
                <Form.Field>
                  <label>Bundle ID</label>
                  <Input name="BundleID" />
                </Form.Field>
              </GridColumnComponent>
            </GridRowComponent>
          </Form>
        </GridComponent>
        <Divider horizontal>Product Color</Divider>
        <GridComponent>
          <Form>
            <GridRowComponent>
              <GridColumnComponent width={6}>
                <Form.Field>
                  <label>Primary Color</label>
                  <ColorPickerInput
                    name="primaryColor"
                    placeholder="Primary Color"
                    onChanged={this.ColorChanged}
                  />
                </Form.Field>
                {/* <Form.Field>
                  <label>Secondary Color</label>
                  <ColorPickerInput
                    name="secondaryColor"
                    placeholder="Secondary Color"
                    onChanged={this.ColorChanged}
                  />
                </Form.Field> */}
              </GridColumnComponent>
            </GridRowComponent>
          </Form>
        </GridComponent>
        <Divider horizontal>App Icons ( PNG )</Divider>
        <GridComponent>
          <Header
            as="h4"
            content="Logo Icon"
            subheader="This icon will use as lanuch icon and replace the following icon"
          />
          <Image src="/Images/ic_launcher.png" size="tinny" />
          <GridRowComponent>
            {this.state.appIconSize.map((Image, index) => {
              return (
                <ImageUploadPlaceHolder
                  key={index}
                  size={Image}
                  colSize="3"
                  list="appIconSize"
                  cacheFile={this.cacheFile}
                  index={index}
                />
              );
            })}
          </GridRowComponent>
        </GridComponent>
        <Divider horizontal>Product logo ( PDF Format )</Divider>
        <GridComponent>
          <Header as="h4" content="Product Logo" subheader="Needs to fill" />
          <GridRowComponent>
            {this.state.requiredPDFFiles.map((Image, index) => {
              return (
                <ImageUploadPlaceHolder
                  key={index}
                  size={Image}
                  colSize="4"
                  list="requiredPDFFiles"
                  cacheFile={this.cacheFile}
                  index={index}
                  type="PDF"
                  name={Image.actualName}
                />
              );
            })}
          </GridRowComponent>
        </GridComponent>
        <div>
          <Button
            content="Submit"
            onClick={e => this.onFormSubmit(e)}
            type="submit"
            primary
          />
          <Button content="Cancel" secondary />
        </div>
      </div>
    );
  }
}

export default IOSComponent;
