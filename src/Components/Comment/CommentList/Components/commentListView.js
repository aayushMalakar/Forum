import React from 'react';
import { Comment } from 'semantic-ui-react';

import './commentList.css';

const CommentListView = ({ comment, commentBy, commentTime }) => {
  return (
    <div className="comment__list">
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">{commentBy}</Comment.Author>
            <Comment.Metadata>
              <div>{commentTime.substr(0, 10)}</div>
            </Comment.Metadata>
            <Comment.Text id="comment">{comment}</Comment.Text>
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
