import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Nav,
  Tab,
  Form,
  Tabs,
  Button,
  Row,
  Col,
  Container,
  Modal,
} from "react-bootstrap";

export class LogIn extends Component {
  state = {
    showL: false,
    showS: false,
    redirect: "/home",
  };
  routeChange = () => {
    return 1 > 2 ? "/home" : "/abc";
  };

  handleShowL = () => {
    this.setState({ showL: true });
  };
  handleCloseL = () => {
    this.setState({ showL: false });
  };
  handleShowS = () => {
    this.setState({ showS: true });
  };
  handleCloseS = () => {
    this.setState({ showS: false });
  };
  render() {
    return (
      <Container className="LogInPage bg-warning" fluid>
        <Row className="LogInRow bg-succes">
          <Col className="col-12">
            <Button className="LogInButton" onClick={this.handleShowL}>
              Log In
            </Button>
            <Modal
              show={this.state.showL}
              onHide={this.handleCloseL}
              aria-labelledby="LogIn"
              centered="true"
              className="Modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="ModalButton"
                  variant="secondary"
                  onClick={this.handleCloseL}
                >
                  Close
                </Button>
                <Button
                  className="ModalButton"
                  variant="primary"
                  href={this.routeChange()}
                >
                  Log In
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Row className="SignUpRow bg-inf">
          <Col className="col-12">
            <Button className="LogInButton" onClick={this.handleShowS}>
              Sign Up
            </Button>
            <Modal
              show={this.state.showS}
              onHide={this.handleCloseS}
              aria-labelledby="SignUp"
              centered="true"
              className="Modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Control
                    type="password"
                    placeholder="Re-Enter Password"
                    style={{ marginTop: "10px" }}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="ModalButton"
                  variant="secondary"
                  onClick={this.handleCloseS}
                >
                  Close
                </Button>
                <Button
                  className="ModalButton"
                  variant="primary"
                  onClick={this.handleCloseS}
                >
                  Sign Up
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>

        {/* <Tabs
          defaultActiveKey="LogIn"
          className="LogInForm"
          style={{ marginTop: "17%" }}
        >
          <Tab.Pane eventKey="LogIn" title="Log In" className="Tab">
            <Form className="LogInForm">
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="LogInButton float-right" type="submit">
                Log In
              </Button>
            </Form>
          </Tab.Pane>
          <Tab.Pane eventKey="SignUp" title="Sign Up" className="Tab">
            <Form className="LogInForm">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Control
                  type="password"
                  placeholder="Re-Enter Password"
                  style={{ marginTop: "10px" }}
                />
              </Form.Group>
              <Button className="LogInButton float-right" type="submit">
                Sign Up
              </Button>
            </Form>
          </Tab.Pane>
        </Tabs> */}
      </Container>
    );
  }
}

export default LogIn;
