import React, { Component } from "react";

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


import MainViewComponent from "./MainViewComponent.js";

class App extends Component {
  render() {
    return (
      <Segment>
        <Container>
          <MainViewComponent>

          </MainViewComponent>
        </Container>
      </Segment>
    );
  }
}
export default App;
