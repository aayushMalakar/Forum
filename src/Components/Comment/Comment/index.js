import React, { useState } from "react";
import CommentLoader from "./commentLoader";

const Comment = props => {
  const [comments, setComments] = useState([
    {
      id: 101,
      name: "aayush",
      date: "something",
      answer: "yes he is a loser so he always comes late "
    }
  ]);
  return (
    <div>
      {comments.length > 0 ? (
        comments.map(comment => (
          <CommentLoader key={comment.id} comment={comment}></CommentLoader>
        ))
      ) : (
        <div>no comments</div>
      )}
    </div>
  );
};

export default Comment;
