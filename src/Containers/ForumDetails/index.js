import React, { useState, useEffect } from "react";

import Card from "../../Components/Card";
import CommentBox from "../../Components/Comment/CommentBox";
import CommentList from "../../Components/Comment/CommentList";

const ForumDetails = ({ comment }) => {
  //   const [name, setName] = useState("");
  //   const [date, setDate] = useState("");
  //   const [answer, setAnswer] = useState("");
  const [comments, setComments] = useState([
    {
      commentId: "p01",
      value: [
        {
          id: 101,
          name: "aayush",
          date: "something",
          answer:
            "React is very popular framework that can built a fast front end for your application  "
        },
        {
          id: 102,
          name: "Sumit",
          date: "something",
          answer: "Vue is also a good framework because it is easy to learn  "
        },
        {
          id: 103,
          name: "Sunjay",
          date: "something",
          answer: "EveryBody knows react is the best"
        }
      ]
    },
    {
      commentId: "p02",
      value: [
        {
          id: 101,
          name: "aayush",
          date: "something",
          answer:
            "yes beacuse you are playing fortnite without any dedicated graphics"
        },
        {
          id: 102,
          name: "Sumit",
          date: "something",
          answer: "you need rtx 2080Ti "
        },
        {
          id: 103,
          name: "Nitesh",
          date: "something",
          answer: "you're a noob"
        }
      ]
    }
  ]);

  const [Commentclicked, setCommentclicked] = useState(true);

  // const [buttonValues, setButtonValues] = useState([
  //   "thumbs up outline",
  //   "thumbs down outline",
  //   "share"
  // ]);

  useEffect(() => {
    if (comments.length > 0) {
      setComments(comments);
    }
  }, [comments]);

  const toggleCommentBox = () => {
    setCommentclicked(!Commentclicked);
  };

  return (
    <div>
      <Card toggleComment={toggleCommentBox} />
      {Commentclicked === true ? (
        <div>
          <CommentBox commentId={this.state.comment} />
          {comments.length > 0 ? (
            comments.map(comment => (
              <CommentList key={comment.id} comment={comment}></CommentList>
            ))
          ) : (
            <div>no comments</div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ForumDetails;
