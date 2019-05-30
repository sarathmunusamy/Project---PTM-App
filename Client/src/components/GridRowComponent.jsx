import React from "react";
import { Grid } from "semantic-ui-react";

const GridRowComponent = props => {
  return <Grid.Row>{props.children}</Grid.Row>;
};

export default GridRowComponent;
