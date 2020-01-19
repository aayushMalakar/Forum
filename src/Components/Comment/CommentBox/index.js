import React from "react";
import { Input, Button, Icon, Label, Form } from "semantic-ui-react";

const Comment = props => {
  return (
    <form>
      {/* <input type="text" value="Enter you comment"></input>
      <button>submit</button>
      <Input placeholder="Search..." /> */}
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" primary />
    </form>

    // <form onSubmit={onSubmitHandler}>
    // <input type="text" value="Enter you comment" onChange={onChangeHandler}></input>
    // <button>submit</button>
    // </form>
  );
};

export default Comment;
