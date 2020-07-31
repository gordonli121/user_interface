import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SideBar } from "./main/SideBar";
import { Feed } from "./main/Feed";
import { NoMatch } from "./main/NoMatch";
import { NavBar } from "./main/NavBar";
import { Row, Col, Container } from "react-bootstrap";
import Suggested from "./main/Suggested";
import { Trial } from "./main/Trial";

function App() {
  return (
    <React.Fragment>
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
            {/* <Trial /> */}
          </Col>
          <Col className="col-6 p-0 bg-success">
            <div>
              <Feed />
            </div>
          </Col>
          <Col className="col-3 p-0">
            <Suggested />
          </Col>
        </Row>
      </Container>
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
