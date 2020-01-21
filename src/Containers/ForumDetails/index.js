import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";

import Card from "../../Components/Card";
import Button from "../../Components/Button";
import CommentBox from "../../Components/Comment/CommentBox";
import CommentList from "../../Components/Comment/CommentList";

const ForumDetails = ({ comment }) => {
  //   const [name, setName] = useState("");
  //   const [date, setDate] = useState("");
  //   const [answer, setAnswer] = useState("");

  const [comments, setComments] = useState([
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
    }
  ]);

  const [buttonValues, setButtonValues] = useState([
    "thumbs up outline",
    "thumbs down outline",
    "share"
  ]);

  useEffect(() => {
    if (comments.length > 0) {
      setComments(comments);
    }
  }, [comments]);

  return (
    <div>
      <Container>
        <Card />
        {buttonValues.map(type => (
          <Button icon={type} key={type} />
        ))}
        <CommentBox />
        {comments.length > 0 ? (
          comments.map(comment => (
            <CommentList key={comment.id} comment={comment}>
              Hello from the comment box
            </CommentList>
          ))
        ) : (
          <div>no comments</div>
        )}
      </Container>
    </div>
  );
};

export default ForumDetails;
