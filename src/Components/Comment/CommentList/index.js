import React, { useState, useEffect } from "react";
import { Comment } from "semantic-ui-react";

const CommentLoader = ({ comment }) => {
  const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (Object.keys(comment).length > 0) {
      setName(comment.name);
      // setDate(comment.date);
      setAnswer(comment.answer);
    }
  }, [comment]);

  return (
    <div>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">{name}</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>{answer}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      <hr />
    </div>
  );
};

export default CommentLoader;
