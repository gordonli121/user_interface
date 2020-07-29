import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

export class NavBar extends Component {
  render() {
    return (
      <Navbar bg="info" variant="dark" sticky="top">
        <Navbar.Brand href="#home">MySpace</Navbar.Brand>
        <Form className="ml-auto" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#username">UserName</Nav.Link>
          <Nav.Link href="#picture">Picture</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
