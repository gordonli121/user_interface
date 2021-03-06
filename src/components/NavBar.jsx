import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl, Image } from "react-bootstrap";
// import store from "../redux/store";

export class NavBar extends Component {
  render() {
    return (
      <Navbar className="NavBar" variant="dark" fixed="top">
        <Navbar.Brand href="/home">MyZone</Navbar.Brand>
        <Form className="ml-auto" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="form-button">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="/profile">Gordon Li</Nav.Link>
          <Nav.Link href="/profile">
            <Image
              style={{ width: 30, height: "auto" }}
              src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              roundedCircle
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
