import React, { useState, useEffect } from "react";

import CommentLoader from "./commentLoader";

const Comment = props => {
  const [comments, setComments] = useState([
    {
      id: 101,
      name: "aayush",
      date: "something",
      answer: "yes he is a loser so he always comes late "
    },
    {
      id: 102,
      name: "Sumit",
      date: "something",
      answer: "Hey its me summit and i agree with the post "
    }
  ]);

  useEffect(() => {
    if (comments.length > 0) {
      setComments(comments);
    }
  });

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
