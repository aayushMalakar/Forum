import React from "react";
import { Comment } from "semantic-ui-react";

import "./commentList.css";

const CommentListView = props => {
  return (
    <div className="comment__list">
      <Comment.Group>
        <Comment>
          <Comment.Avatar
            circular
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          />
          <Comment.Content>
            <Comment.Author as="a">Name</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>Answer</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
};

export default CommentListView;
