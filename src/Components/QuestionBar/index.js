import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Form, Image, Dropdown } from "semantic-ui-react";

import "./QuestionBar.css";

const QuestionCard = () => {
  const tags = [
    { key: "education", text: "Education", value: "education" },
    { key: "science", text: "Science", value: "science" },
    { key: "politics", text: "Politics", value: "politics" },
    { key: "sports", text: "Sports", value: "sports" }
  ];

  const [display, setDisplay] = useState("question-bar__footer-hidden");

  const check = ["question-bar__footer-block", "question-bar__footer-hidden"];

  return (
    <>
      <Form
        id="question-bar"
        tabindex="-1"
        // onBlur={() => {
        //   setDisplay(check[1]);
        // }}
        autoComplete="off"
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
            name="name"
            width={15}
            id="question-bar__input"
            onFocus={() => {
              setDisplay(check[0]);
            }}
          />
          <br />
        </div>

        <div className={display}>
          <hr className="hr1" />
          <Dropdown
            id="question-bar__tags"
            placeholder="Topics"
            fluid
            multiple
            selection
            options={tags}
          />
          <Form.Button content="Submit" fluid />
        </div>
      </Form>
    </>
  );
};

export default QuestionCard;
