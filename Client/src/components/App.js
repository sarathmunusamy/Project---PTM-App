import React, { Component } from "react";

import MainPageComponent from "./MainPageComponent.jsx";
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

class App extends Component {
  render() {
    return (
      <Segment>
        <Container>
          <GridComponent>
            <GridRowComponent>
              <GridColumnComponent width={16}>
                <Image src="/Images/MFilesLogo.png" centered />
              </GridColumnComponent>
            </GridRowComponent>
            <Grid.Row centered columns={16}>
              <Header as="h3"> Co-Branding Automation POC </Header>
            </Grid.Row>
          </GridComponent>
          <MainPageComponent />
        </Container>
      </Segment>
    );
  }
}
export default App;
