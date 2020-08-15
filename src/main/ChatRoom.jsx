import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export class ChatRoom extends Component {
  render() {
    return (
      <div className="ChatRoom bg-dange">
        <Row className="Dialogue bg-succes">
          <Col>HEY!!!</Col>
        </Row>
        <hr className="h-divider"></hr>
        <Row className="Typing bg-inf">
          <Col>
            <Form className="PostTweet">
              <Form.Group>
                <Form.Control as="textarea" className="PostBox" rows="5" />
                {/* </Form.Group>
              <Form.Group className="bg-danger"> */}
                <Button className="form-button float-right mt-2 mr-3">
                  Send
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChatRoom;
