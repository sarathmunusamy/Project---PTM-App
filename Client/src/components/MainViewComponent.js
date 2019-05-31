import React, { Component } from "react";
import TaskListViewComponent from "./TaskListViewComponent.js";
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

class MainViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Task: null,
      error:""
    };
  }

  componentDidMount() {
    this.loadTaksInfo();
  }

  loadTaksInfo() {
    var config = new Object();

    config = {
      headers: {
        "content-type": "text/plain"
      }
    };

    axios
      .post("/api/getAllTask", config)
      .then(Response => {
        this.setState({
          Task: Response.data
        });
      })
      .catch(error => {
        alert("error");
      });
  }

  render() {
    return (
      <div>
        <TaskListViewComponent text={this.state.Task} />
      </div>
    );
  }
}

export default MainViewComponent;
