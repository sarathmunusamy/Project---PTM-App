import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
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

class IosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryColor: "#FFF",
      secondaryColor: "#FFF",

      androidappIconDetails: [
        {
          width: 48,
          height: 48,
          dimension: "48 X 48",
          actualName: "ic_launcher.png",
          file: "",
          url: "mFiles/src/main/res/drawable-mdpi"
        },
        {
          width: 72,
          height: 72,
          dimension: "72 X 72",
          actualName: "ic_launcher.png",
          file: "",
          url: "mFiles/src/main/res/drawable-hdpi"
        },

        {
          width: 96,
          height: 96,
          dimension: "96 X 96",
          actualName: "ic_launcher.png",
          file: "",
          url: "mFiles/src/main/res/drawable-xhdpi"
        },
        {
          width: 144,
          height: 144,
          dimension: "144 X 144",
          actualName: "ic_launcher.png",
          file: "",
          url: "mFiles/src/main/res/drawable-xxhdpi"
        }
        // { width: 192, height: 192, dimension: "192 X 192", file: "", url:"" },
      ],

      requiredSVG: [
        {
          name: "AppIcon",
          file: "",
          title: "App Icon",
          actualName: "mfiles_logo_big.xml",
          svgName: "mfiles_logo_big.svg",
          url: "mFiles/src/main/res/drawable",
          imageURL: "/Images/mfiles_logo.png",
          description:
            "This icon will display in the login page and will replace the following icon "
        },

        {
          name: "TextLogo_White",
          file: "",
          title: "App Name Logo (White Background)",
          actualName: "mfiles_logo.xml",
          svgName: "mfiles_logo.svg",
          imageURL: "/Images/mfiles_logo.png",
          description:
            "This icon will display at bottom of the taskpane and will replace bellow icon ",
          url: "mFiles/src/main/res/drawable"
        },

        {
          name: "TextLogo",
          file: "",
          title: "App Name Logo",
          actualName: "mfiles_logo_blue.xml",
          svgName: "mfiles_logo_blue.svg",
          imageURL: "/Images/mfiles_logo_blue.png",
          description:
            "This icon will display in the about page and will replace the following icon",
          url: "mFiles/src/main/res/drawable"
        },

        {
          name: "AppIcon_White",
          file: "",
          title: "App Icon (White Background)",
          actualName: "mfiles_logo_s1_blue.xml",
          svgName: "mfiles_logo_s1_blue.svg",
          url: "mFiles/src/main/res/drawable",
          imageURL: "/Images/mfiles_logo_s1_blue.png",
          description:
            "This icon will display in the about page and will replace the following icon"
        }
        // ,
        // {
        //   name: "AppIcon_White",
        //   file: "",
        //   title: "App Icon (White Background)",
        //   actualName: "mfiles_logo_s02.xml",
        //   svgName: "mfiles_logo_s02.svg",
        //   url: "mFiles/src/main/res/drawable",

        //   description: "This icon will replace the App white icon"
        // },

        // ,
        // {
        //   name: "BgColor",
        //   file: "",
        //   actualName: "splash_background.xml",
        //   svgName: "splash_background.svg",
        //   description:"This icon will replace the following icon",
        //   title: "Application Splash Background",
        //   url: "mFiles/src/main/res/drawable"
        // }
      ],
      //,{ name: "ActionBar", file: "", title: "Action Bar Background" },

      toolBarIcon: [{ width: 13, height: 13, dimension: "13 X 13", file: "" }]
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

    this.props.onSubmit(files, OtherDetails, true);

    //this.uploadDetails(files);
  }

  ColorChanged(color, Field) {
    const $ = window.$;

    $("input[name=" + Field + "]").val(color);
  }

  AllImagesUpload(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files;
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
            subheader="This icon will be display as the lanuch icon for the app."
          />
          <Image src="/Images/ic_launcher.png" size="tinny" />
          <GridRowComponent>
            {this.state.androidappIconDetails.map((Image, index) => {
              return (
                <ImageUploadPlaceHolder
                  key={index}
                  size={Image}
                  colSize="3"
                  list="androidappIconDetails"
                  cacheFile={this.cacheFile}
                  index={index}
                />
              );
            })}
          </GridRowComponent>
        </GridComponent>
        <Divider horizontal>Product logo ( SVG Format )</Divider>
        <GridComponent>
          <GridRowComponent>
            {this.state.requiredSVG.map((Image, index) => {
              return (
                <ImageUploadPlaceHolder
                  key={index}
                  size={Image}
                  colSize="8"
                  list="requiredSVG"
                  cacheFile={this.cacheFile}
                  index={index}
                  name={Image.actualName}
                  type="SVG"
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

export default IosComponent;
