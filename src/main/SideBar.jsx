import React, { Component } from "react";
import { Nav, Button, Badge, Row, Col, Container } from "react-bootstrap";
import { Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { GoHome, GoPerson, GoMail, GoBell, GoSignOut } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";

export class SideBar extends Component {
  butt = styled.button`
    background: transparent;
    border-radius: 3px;
    border: transparent;
    font-weight: bold;
    font-size: 2em;
    color: white;
    margin: 0;
    padding: 0em 0em 2em 0em;
  `;

  render() {
    return (
      <Navbar className="sidebar flex-column">
        <div className="element-center">
          <Nav.Link className="Nav-Link text-left">
            <GoHome className="mr-2 mb-2" />
            Home
          </Nav.Link>

          <Badge className="bg-danger"></Badge>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link text-left">
            <GoPerson className="mr-2 mb-2" />
            Profile
          </Nav.Link>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link text-left">
            <GoMail className="mr-2 mb-2" />
            Messages
          </Nav.Link>
          <Badge className="bg-danger badge-pill">4</Badge>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link text-left">
            <GoBell className="mr-2 mb-2" />
            Notifications
          </Nav.Link>
          <Badge className="bg-danger badge-pill">5</Badge>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link text-left">
            <FaHashtag className="mr-2 mb-2" />
            Explore
          </Nav.Link>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link text-left">
            <GoSignOut className="mr-2 mb-2" />
            Log Out
          </Nav.Link>
        </div>
      </Navbar>
    );
  }
}

export default SideBar;
