import React from "react";
import { Segment, Input, container } from "semantic-ui-react";
import GridComponent from "./GridComponent.jsx";
import GridRowComponent from "./GridRowComponent.jsx";
import GridColumnComponent from "./GridColumnComponent.jsx";
import ColorPicker from "./ColorPicker";
import { SketchPicker } from "react-color";

const ColorPickerInput = props => {
  return (
    <GridComponent>
      <GridRowComponent>
        <GridColumnComponent width="12">
          <Input placeholder={props.placeholder} name={props.name} />
        </GridColumnComponent>
        <GridColumnComponent width="2">
          <ColorPicker inputName={props.name} onChanged={props.onChanged} />
        </GridColumnComponent>
      </GridRowComponent>
    </GridComponent>
  );
};

export default ColorPickerInput;
