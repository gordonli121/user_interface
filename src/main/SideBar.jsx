import React, { Component } from "react";
import { Nav, Button, Badge, Row, Col } from "react-bootstrap";
import { Navbar, Form, FormControl } from "react-bootstrap";

export class SideBar extends Component {
  render() {
    return (
      // <Navbar bg="secondary" variant="dark" fixed="left" className="sup">
      //   <Nav variant="pills" className="flex-column ">
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         Followers
      //       </Button>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         Following
      //       </Button>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         Notifications
      //       </Button>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         Messages
      //       </Button>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         Explore
      //       </Button>
      //     </Nav.Item>
      //   </Nav>
      //   <Nav variant="pills" className="flex-column ">
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         <Badge
      //           variant="pills"
      //           className="badge badge-pill badge-danger mr-auto"
      //         >
      //           26
      //         </Badge>
      //       </Button>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Badge
      //         variant="pills"
      //         className="badge badge-pill badge-lg badge-danger mr-auto"
      //       >
      //         38
      //       </Badge>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         Notifications
      //       </Button>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         Messages
      //       </Button>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Button className="btn-secondary btn-lg btn-block font-weight-bold">
      //         Explore
      //       </Button>
      //     </Nav.Item>
      //   </Nav>
      // </Navbar>
      <Navbar
        bg="secondary"
        variant="dark"
        fixed="left"
        className="flex-column"
      >
        <Row>
          <Col>
            <Button className="btn-secondary btn-lg btn-block font-weight-bold">
              Followers
            </Button>
          </Col>
          <Col>
            <Badge
              variant="pills"
              className="badge badge-pill badge-danger mr-auto"
            >
              26
            </Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn-secondary btn-lg btn-block font-weight-bold">
              Following
            </Button>
          </Col>
          <Col>
            <Badge
              variant="pills"
              className="badge badge-pill badge-danger mr-auto"
            >
              38
            </Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn-secondary btn-lg btn-block font-weight-bold">
              Notifications
            </Button>
          </Col>
          <Col>
            <Badge
              variant="pills"
              className="badge badge-pill badge-danger mr-auto"
            >
              4
            </Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn-secondary btn-lg btn-block font-weight-bold">
              Messages
            </Button>
          </Col>
          <Col>
            <Badge
              variant="pills"
              className="badge badge-pill badge-danger mr-auto"
            >
              15
            </Badge>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

export default SideBar;
