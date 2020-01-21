import React from "react";
import { Form, Image, Segment } from "semantic-ui-react";

import style from "./QuestionBar.module.css";

const QuestionCard = () => {
  return (
    <>
      <Segment>
        <Form>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
            size="mini"
            floated="left"
            verticalAlign="middle"
            avatar
            border="1px"
          />
          <Form.Group>
            <Form.Input
              transparent
              placeholder="Hey stuck! Ask some Question?"
              name="name"
              width={12}
            />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
      </Segment>
    </>
  );
};

export default QuestionCard;
