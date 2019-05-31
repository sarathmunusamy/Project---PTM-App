import React, { Component } from "react";

class TaskListViewComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {}

  render() {
    return <div> {this.props.text} </div>;
  }
}

export default TaskListViewComponent;
