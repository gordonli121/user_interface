import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../main/NavBar";
import SideBar from "../main/SideBar";
import FriendList from "../main/FriendList";
import ChatRoom from "../main/ChatRoom";

export class Messages extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 p-2">
            <p>" "</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-3 p-0">
            <SideBar />
          </Col>
          <Col>
            <ChatRoom />
          </Col>
          <Col>
            <FriendList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Messages;
