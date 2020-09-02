import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../main/NavBar";
import SideBar from "../main/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suggested } from "../main/Suggested";
import { Feed } from "../main/Feed";
import { ProfileInfo } from "../main/ProfileInfo";
import Notification from "../main/Notification";
import Exploring from "../main/Exploring";

export class Main extends Component {
  render() {
    return (
      <Container fluid>
        <Row bg="info">
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
          <Col className="col-6 p-0 bg-success">
            <Router>
              <Switch>
                <Route exact path="/main/home" component={Feed} />
                <Route path="/main/profile" component={ProfileInfo} />
                <Route path="/main/notifications" component={Notification} />
                <Route path="/main/explore" component={Exploring} />
                <Route path="/main" component={Feed} />
              </Switch>
            </Router>
          </Col>
          <Col className="col-3 p-0">
            <Suggested />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
