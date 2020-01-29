import React, { useState } from 'react';
import axios from 'axios';
import CommentBox from '../../Comment/CommentBox';
import { Item, Icon, Popup, Label } from 'semantic-ui-react';

import './card.css';

const CardView = ({
  q_title,
  questioner,
  date,
  tags,
  questionID,
  upVoteCounter,
  commentCounter
}) => {
  // UPVOTING
  const upvoterID = localStorage.getItem('loggedUserID');
  const data = { upVoteCounter: upvoterID };
  const upVote = () => {
    console.log('thanks for upvoting');
    try {
      axios
        .post(`http://localhost:3001/api/forum/getquestion/${questionID}`, data)
        .then(response => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // COMMENT HANDELING
  const [initialState, setInitialState] = useState({
    showResults: false
  });
  const handleClick = () => {
    setInitialState({
      showResults: !initialState.showResults
    });
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
              <Label className="popups" onClick={upVote}>
                <Icon name="arrow up" /> {upVoteCounter}
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
                <Icon name="comment outline" /> {commentCounter}
              </Label>
            }
            content="Comment"
            position="top center"
            size="mini"
          />
        </span>
        <span className="card-container__view-comments">
          <Icon name="ellipsis vertical" />
        </span>
      </div>
      {initialState.showResults ? <CommentBox questionID={questionID} /> : null}
    </div>
  );
};

export default CardView;
