import React from "react";
import { Button, Form } from "semantic-ui-react";

const Comment = props => {
  return (
    <form>
      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </form>
  );
};

export default Comment;
