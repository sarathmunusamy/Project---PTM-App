import React from "react";
import { Grid } from "semantic-ui-react";

const GridColumnComponent = props => {
  return <Grid.Column width= {props.width} verticalAlign="middle">{props.children}</Grid.Column>;
};

export default GridColumnComponent;
