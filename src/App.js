import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SideBar } from "./main/SideBar";
import { Feed } from "./main/Feed";
import { NoMatch } from "./main/NoMatch";
import { NavBar } from "./main/NavBar";
import { Row, Col, Container } from "react-bootstrap";
import Suggested from "./main/Suggested";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Container> */}
      <Row>
        <Col sm={3}>
          <SideBar className="hello" />
        </Col>
        <Col sm={6}>
          <Feed />
        </Col>
        <Col sm={3}>
          <Suggested />
        </Col>
      </Row>
      {/* </Container> */}
      {/* <SideBar /> */}
      {/* <Router>
        <Switch>
          <Route exact path="/" component={SideBar} />
          <Route path="/about" component={Feed} />
          <Route component={NoMatch} />
        </Switch>
      </Router> */}
    </React.Fragment>
  );
}

export default App;
