import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";

import "./commentBoxStyle.css";

const Comment = props => {
  const [Commentclicked, setCommentclicked] = useState(props.clicked);

  useEffect(() => {
    setCommentclicked(props.clicked);
  }, [props.clicked]);

  return (
    <>
      {Commentclicked === true ? (
        <div>
          <form>
            <Form.TextArea rows="5" cols="80" />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
            <a href="#">view comments</a>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
