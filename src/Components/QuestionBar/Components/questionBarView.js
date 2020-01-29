import React from "react";
import { Form, Image, Dropdown, Modal, Message } from "semantic-ui-react";

import "./questionBar.css";

const QuestionBarView = props => {
  return (
    <>
      <Form
        className="attached fluid segment"
        id="question-bar"
        autoComplete="off"
        onSubmit={props.SubmitHandler}
      >
        <div className="question-input">
          <Image
            id="question-bar__image"
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
            size="mini"
            floated="left"
            avatar
          />
          <Form.Input
            placeholder="Hey stuck! Ask some Question?"
            name="q_title"
            width={15}
            id="question-bar__input"
            onChange={props.questionHandler}
            required
          />
          <br />
        </div>
        <div>
          <hr />
          <Dropdown
            id="question-bar__tags"
            placeholder="Topics"
            fluid
            multiple
            selection
            options={props.tags}
            onChange={props.tagHandler}
            required
          />
          {props.error ? (
            <Message negative>
              <Message.Header id="msg-header">
                You need Tag to submit the question
              </Message.Header>
            </Message>
          ) : null}

          <Form.Button content="Submit" fluid />
          <Modal open={props.modal} basic size="small">
            <Modal.Content>
              <div id="modal-header">Your question has been submitted</div>
            </Modal.Content>
          </Modal>
        </div>
      </Form>
    </>
  );
};

export default QuestionBarView;
