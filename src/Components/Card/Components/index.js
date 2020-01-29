import React, { useEffect, useState } from "react";
import api from "../../../Services/Api/api";
import CardView from "./cardView";

const Cards = props => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const getQuestion = await fetch(api.getQuestion);
    const data = await getQuestion.json();
    setQuestions(data);
  };

  return (
    <div>
      {questions.map(question => (
        <CardView
          key={question._id}
          tags={question.tags}
          questionID={question._id}
          q_title={question.q_title}
          questioner={question.questioner}
          date={question && question.date ? question.date.substr(0, 10) : ""}
        />
      ))}
    </div>
  );
};

export default Cards;
