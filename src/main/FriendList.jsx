import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class FriendList extends Component {
  render() {
    return (
      <div className="FriendList">
        <Row className="bg-warnin ml-3 font-weight-bold pt-1 h4">Gordon</Row>
        <Row className="bg-warnin ml-3 font-weight-bold pt-1 h4">Mike</Row>
        <Row className="bg-warnin ml-3 font-weight-bold pt-1 h4">Maria</Row>
        <Row className="bg-warnin ml-3 font-weight-bold pt-1 h4">John</Row>
      </div>
    );
  }
}

export default FriendList;
