import React, { Component } from "react";
import { Nav, Button, Badge, Row, Col, Container } from "react-bootstrap";
import { Navbar, Form, FormControl } from "react-bootstrap";
import { GoHome, GoPerson, GoMail, GoBell, GoSignOut } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";

export class SideBar extends Component {
  render() {
    return (
      <Navbar className="sidebar flex-column">
        <div className="element-center">
          <Nav.Link className="Nav-Link">
            <GoHome className="mr-2 mb-2" />
            Home
          </Nav.Link>

          <Badge className="bg-danger"></Badge>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link">
            <GoPerson className="mr-2 mb-2" />
            Profile
          </Nav.Link>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link">
            <GoMail className="mr-2 mb-1" />
            Messages
          </Nav.Link>
          <Badge className="bg-danger badge-pill">4</Badge>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link">
            <GoBell className="mr-2 mb-2" />
            Notifications
          </Nav.Link>
          <Badge className="bg-danger badge-pill">5</Badge>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link">
            <FaHashtag className="mr-2 mb-1" />
            Explore
          </Nav.Link>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link">
            <GoSignOut className="mr-2" />
            Log Out
          </Nav.Link>
        </div>
      </Navbar>
    );
  }
}

export default SideBar;
