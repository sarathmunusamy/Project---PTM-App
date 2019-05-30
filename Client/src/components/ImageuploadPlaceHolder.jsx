import React, { Component } from "react";
import {
  Grid,
  Button,
  Icon,
  Placeholder,
  Label,
  Accordion,
  Message
} from "semantic-ui-react";
import ImageHolder from "./ImageHolder";

class ImageUploadPlaceHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewURL: "",
      file: ""
    };
  }


  isValidImage(file, callback) {
    if (file.type == "application/pdf") {
      callback(true);
    } else {
      var _URL = window.URL || window.webkitURL;
      var file, img;
      img = new Image();
      var self = this;

      img.onload = function() {
        if (
          this.width == self.props.size.width &&
          this.height == self.props.size.height
        ) {
          callback(true);
        } else {
          callback(false);
        }
      };

      if (file) img.src = _URL.createObjectURL(file);
    }
  }

  imageUploaded(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    var self = this;
    var props = this.props;

    //  if (file.type != "image/svg+xml") {
    this.isValidImage(file, function(isvalid) {
      if (isvalid || file.type == "image/svg+xml") {
        document.getElementById("errorMsg").innerText = "";

        reader.onloadend = () => {
          self.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
          props.cacheFile(file, props.list, props.index);
        };

        if (file) reader.readAsDataURL(file);
      } else {
        document.getElementById("errorMsg").innerText =
          " Please upload the Image of dimension " + props.size.dimension;

        document.getElementById("previewImage").src = "";
      }
    });
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <ImageHolder
          id="previewImage"
          src={imagePreviewUrl}
          size="tiny"
          type={this.props.type}
          name= {this.props.name}
        />
      );
    } else {
      $imagePreview = (
        <ImageHolder
          id="previewImage"
          src={imagePreviewUrl}
          size="tiny"
          type={this.props.type}
          
        />
      );
    }

    return (
      <Grid.Column className="imageColumn" width={this.props.colSize}>
        <div className="upload-btn-wrapper">
          {this.props.size.description ? (
            <div>
              {" "}
              <Message className="message">
                {" "}
                {this.props.size.description}
                {this.props.size.imageURL ? (
                  <img src={this.props.size.imageURL} />
                ) : (
                  ""
                )}
              </Message>
              <Button size="tiny">
                <Icon name="upload" />{" "}
                {this.props.size.dimension
                  ? this.props.size.dimension
                  : "Upload " + this.props.type}
              </Button>
            </div>
          ) : (
            <Button size="tiny">
              <Icon name="upload" />{" "}
              {this.props.size.dimension
                ? this.props.size.dimension
                : "Upload " + this.props.type}
            </Button>
          )}
          <div className="errorMessage" id="errorMsg" />
          <input
            type="file"
            name="myImage"
            onChange={e => this.imageUploaded(e)}
          />
        </div>
        <div>{$imagePreview}</div>
      </Grid.Column>
    );
  }
}

export default ImageUploadPlaceHolder;
