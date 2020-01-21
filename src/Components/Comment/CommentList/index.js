import React, { useState, useEffect } from "react";
import { Comment } from "semantic-ui-react";

import "./commentListStyle.css";

const CommentLoader = props => {
  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  // const [answer, setAnswer] = useState("");

  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      // setName(comment.name);
      // setDate(comment.date);
      // setAnswer(comment.answer);
      setComments(props.comment);
    }
  }, [props]);

  return comments.map(comment => (
    <div className="comment__list">
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">{comment.name}</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>{comment.answer}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      <hr />
    </div>
  ));
};

export default CommentLoader;
