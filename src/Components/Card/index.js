import React, { useState } from "react";
import { Item } from "semantic-ui-react";

import CommentBox from "../Comment/CommentBox";

import "./cardStyle.css";

const Cards = props => {
  const [Commentclicked, setCommentclicked] = useState(true);

  const toggleCommentBox = () => {
    setCommentclicked(!Commentclicked);
  };

  return (
    <>
      <div className="card-container">
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as="a">{props.post.title}</Item.Header>
              <Item.Meta> {props.post.author}</Item.Meta>
              <Item.Description>{props.post.question}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <hr />
        <div>
          <span className="icon">
            <i className="fas fa-arrow-up"></i>
            <span>{props.post.upVotes}</span>
          </span>

          <span className="icon" onClick={toggleCommentBox}>
            <i className="far fa-comment"></i>
            <span>{props.post.comments}</span>
          </span>
          <span className="icon">
            <i className="fas fa-share-alt"></i>
          </span>
          <span className="card-container__view-comments">
            view comments...
          </span>
        </div>
      </div>
      <CommentBox clicked={Commentclicked} />
    </>
  );
};

export default Cards;
