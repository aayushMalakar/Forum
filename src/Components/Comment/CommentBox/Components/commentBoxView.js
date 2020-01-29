import React from 'react';
import { Button, Form } from 'semantic-ui-react';

import './commentBox.css';

const CommentBoxView = props => {
  return (
    <>
      <div>
        <Form
          autoComplete="off"
          onSubmit={props.handleSubmit}
          className=".form"
        >
          <Form.Group>
            <Form.Input
              placeholder="comment..."
              name="comment"
              width={13}
              fluid
              circular="true"
              className="form-input"
              onChange={props.handleChange}
            />
            <Button
              content="Add Reply"
              primary
              circular
              className="addComment"
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default CommentBoxView;
