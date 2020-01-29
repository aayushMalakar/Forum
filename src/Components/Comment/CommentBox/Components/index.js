import React, { useState } from 'react';
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
    console.log(comments);
  };

  return (
    <>
      <CommentBoxView handleSubmit={handleSubmit} handleChange={handleChange} />
    </>
  );
};

export default CommentBox;
