import React, { useState, useEffect } from 'react';
import CommentListView from './commentListView';

const CommentList = props => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const getComment = await fetch(
      `http://localhost:3001/api/forum/getquestion/${props.questionID}`
    );
    const data = await getComment.json();
    setComments(data);
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(props.questionID, '@@');
  // console.log(comments.comment, '$$');

  return (
    <div>
      {comments && comments.comment
        ? comments.comment.map(c => (
            <CommentListView
              key={c.comment_time}
              comment={c.comment}
              commentBy={c.commentBy}
              commentTime={c.comment_time}
            />
          ))
        : null}
    </div>
  );
};

export default CommentList;
