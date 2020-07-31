import React, { Component } from "react";
import { Nav, Form, FormControl, Button, FormGroup } from "react-bootstrap";
import { TweetElement } from "./TweetElement";

export class Feed extends Component {
  render() {
    return (
      // <React.Fragment>
      <div className="feed-div">
        {/* <hr className="bg-secondary"></hr> */}

        <Form className="PostTweet">
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="what's happening?"
              className="PostBox"
              rows="3"
            />
          </Form.Group>
          <Form.Group className="bg-danger">
            <Button className="form-button float-right mr-3">Post</Button>
          </Form.Group>
        </Form>
        <hr className="h-divider"></hr>
        <div>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
          <TweetElement />
          <hr className="h-divider"></hr>
        </div>
      </div>
      // </React.Fragment>
    );
  }
}

export default Feed;
