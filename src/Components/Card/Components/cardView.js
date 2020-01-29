import React, { useState } from "react";
import { Item, Icon, Popup, Label } from "semantic-ui-react";

import CommentBox from "../../Comment/CommentBox";

import "./card.css";

const CardView = ({ q_title, questioner, date, tags, questionID }) => {
  // COMMENT HANDELING
  const [initialState, setInitialState] = useState({
    showResults: false
  });

  const handleClick = () => {
    setInitialState({
      showResults: !initialState.showResults
    });
  };

  const [toggle, setToggle] = useState(false);

  const handleOptionClick = () => {
    setToggle(!toggle);
  };

  const handleDeletePost = () => {
    console.log(questionID);
  };

  return (
    <div className="card-container">
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as="a">{q_title}</Item.Header> <br />
            <Item.Meta>
              <Icon name="user" className="q_name" />
              {questioner} &nbsp;
              <Icon name="calendar" className="q_name" /> &nbsp;
              {date}
            </Item.Meta>
            <Item.Meta>
              {tags.map(tag => (
                <Label as="a" basic key={tag} color="blue" size="tiny">
                  {tag}
                </Label>
              ))}
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
      <hr />
      <div>
        <span className="font-awesome-icon">
          <Popup
            trigger={
              <Label className="popups">
                <Icon name="arrow up" /> 23
              </Label>
            }
            content="Upvote"
            position="top center"
            size="mini"
          />
        </span>
        <span className="font-awesome-icon">
          <Popup
            trigger={
              <Label className="popups" onClick={handleClick}>
                <Icon name="comment outline" /> 23
              </Label>
            }
            content="Comment"
            position="top center"
            size="mini"
          />
        </span>

        <div
          className="card-container__view-comments"
          onClick={handleOptionClick}
        >
          <Icon name="ellipsis vertical" id="options-icon" />
          {toggle ? (
            <ul className="card-container__options">
              <li onClick={handleDeletePost}>
                <Icon name="delete" id="delete-icon" />
                delete
              </li>
              <li>
                <Icon name="share" id="delete-icon" />
                share
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      {initialState.showResults ? <CommentBox questionID={questionID} /> : null}
    </div>
  );
};

export default CardView;
