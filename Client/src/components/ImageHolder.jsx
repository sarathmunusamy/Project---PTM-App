import React, { Component } from "react";
import { Grid, Button, Icon, Image } from "semantic-ui-react";

const ImageHolder = props => {
  var width = props.src ? 250 : 0,
    height = props.src ? 250 : 0;
  if (props.type != "PDF")
    return <Image size={props.size} src={props.src} id={props.id} />;
  else {
    return (
      <object
        data={props.src}
        width={width}
        height={height}
        name={props.name}
      />
    );
  }
};

export default ImageHolder;
