import React, { Component } from "react";
import { Nav, Badge, Navbar } from "react-bootstrap";
import { GoHome, GoPerson, GoBell, GoSignOut } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
// import store from "../redux/store";

export class SideBar extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout = () => {
    this.props.dispatch({
      type: "LogOut",
    });
    // console.log(store.getState());
  };
  render() {
    return (
      <Navbar className="sidebar flex-column">
        <div className="element-center">
          <Nav.Link className="Nav-Link" href="/main/home">
            <GoHome className="mr-2 mb-2" />
            Home
          </Nav.Link>
          <Badge className="bg-danger"></Badge>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link" href="/main/profile">
            <GoPerson className="mr-2 mb-2" />
            Profile
          </Nav.Link>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link" href="/main/notifications">
            <GoBell className="mr-2 mb-2" />
            Notifications
          </Nav.Link>
          <Badge className="bg-danger badge-pill">5</Badge>
        </div>
        <div className="element-center">
          <Nav.Link className="Nav-Link" href="/main/explore">
            <FaHashtag className="mr-2 mb-1" />
            Explore
          </Nav.Link>
        </div>
        <div className="element-center">
          <Nav.Link
            className="Nav-Link"
            href="/login"
            onClick={this.handleLogout}
          >
            <GoSignOut className="mr-2" />
            Log Out
          </Nav.Link>
        </div>
      </Navbar>
    );
  }
}

export default SideBar;
