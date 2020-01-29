import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import CommentList from '../../CommentList';
import './commentBox.css';

const CommentBoxView = props => {
  return (
    <>
      <div>
        <Form autoComplete="off" onSubmit={props.handleSubmit} className="form">
          <Form.Group className="form-group">
            <Form.Input
              placeholder="comment..."
              name="comment"
              // width={13}
              fluid
              circular="true"
              className="form-input"
              onChange={props.handleChange}
            />
            <Button
              content="Add Reply"
              primary
              circular
              fluid
              id="addComment"
            />
          </Form.Group>
        </Form>
        <CommentList questionID={props.questionID} />
      </div>
    </>
  );
};

export default CommentBoxView;
