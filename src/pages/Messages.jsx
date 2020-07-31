import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Messages extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="bg-warning">sup</Col>
          <Col className="bg-side">hey</Col>
        </Row>
      </Container>
    );
  }
}

export default Messages;
