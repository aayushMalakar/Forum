import React, { useState } from 'react';
import axios from 'axios';
import CommentBoxView from './commentBoxView';

const CommentBox = ({ questionID }) => {
  const [comments, setComments] = useState({});
  const username = localStorage.getItem('username');
  const user_id = localStorage.getItem('loggedUserID');
  var now = new Date();
  const handleChange = e => {
    setComments({
      ...comments,
      [e.target.name]: e.target.value,
      commentBy: username,
      user_ID: user_id,
      questionID: questionID,
      comment_time: now
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    try {
      axios
        .post(
          `http://localhost:3001/api/forum/addcomment/${questionID}`,
          comments
        )
        .then(response => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
    console.log(comments);
  };

  return (
    <>
      <CommentBoxView
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        questionID={questionID}
      />
    </>
  );
};

export default CommentBox;
