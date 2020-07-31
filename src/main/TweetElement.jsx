import React, { Component } from "react";
import { Row, Container, Col, Image, Nav, Dropdown } from "react-bootstrap";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";

export class TweetElement extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="col-2 bg-dange">
            <Image
              className="float-right mt-2 bg-light"
              style={{ width: 50, height: "auto" }}
              src="https://i.stack.imgur.com/34AD2.jpg"
              roundedCircle
            />
          </Col>
          <Col className="col-10 ">
            <Row>
              <Col className="col-11">
                <Nav.Link className="UserName">Username</Nav.Link>
              </Col>
              <Col className="col-1 ">
                <Dropdown>
                  <Dropdown.Toggle className="DropDownButt"></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="feed-content">
                  You need to import the picture into the React component. Say
                  our image is in the same folder as our React component, your
                  import would look something like this. import Logo from
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav.Link className="Actions text-dange">
                  {1 > 2 ? (
                    <MdFavoriteBorder className="mb-1" />
                  ) : (
                    <MdFavorite className="mb-1" />
                  )}{" "}
                  {23}
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link className="Actions text-secondar">
                  <FaRegComment className="mb-1" />
                  {"  "}
                  {65}
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link className="Actions text-warnin">
                  <AiOutlineRetweet className="mb-1" />
                  {"  "}
                  {38}
                </Nav.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TweetElement;
