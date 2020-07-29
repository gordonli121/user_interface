import React, { Component } from "react";
import { Nav, Button } from "react-bootstrap";

export class Suggested extends Component {
  render() {
    return (
      <Nav variant="pills" className="flex-column bg-primary">
        <Button className="btn-warning btn-lg btn-block">Hey</Button>
        <hr></hr>
        <Button className="btn-warning btn-lg btn-block">Hey</Button>
        <hr></hr>
        <Button className="btn-warning btn-lg btn-block">Hey</Button>
        <hr></hr>
        <Button className="btn-warning btn-lg btn-block">Hey</Button>
        <hr></hr>
        <Button className="btn-warning btn-lg btn-block">Hey</Button>
        <hr></hr>
      </Nav>
    );
  }
}

export default Suggested;
