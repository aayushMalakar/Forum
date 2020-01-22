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
          <Form autoComplete="off">
            <Form.Group>
              <Form.Input
                placeholder="comment..."
                name="name"
                width={12}
                id="comment-box__input"
              />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
                id="comment-box__button"
              />
            </Form.Group>
          </Form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
