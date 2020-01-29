import React, { useState } from "react";
import axios from "axios";
import QuestionBarView from "./questionBarView";
import api from "../../../Services/Api/api";

const QuestionBar = props => {
  const topics = [
    { key: "education", text: "Education", value: "education" },
    { key: "science", text: "Science", value: "science" },
    { key: "politics", text: "Politics", value: "politics" },
    { key: "sports", text: "Sports", value: "sports" },
    { key: "philosophy", text: "Philosophy", value: "philosophy" },
    { key: "tech", text: "Tech", value: "tech" },
    { key: "entertainment", text: "Entertainment", value: "entertainment" }
  ];
  const [questionsInfo, setQuestionsInfo] = useState({
    questioner: localStorage.getItem("username")
  });

  const [modal, setmodal] = useState(false);

  const [errors, setErrors] = useState(false);

  const onQuestionChange = e => {
    setQuestionsInfo({
      ...questionsInfo,
      [e.target.name]: e.target.value
    });
  };
  const onTagChange = (e, { value }) => {
    setQuestionsInfo({
      ...questionsInfo,
      tags: value
    });
  };

  const handleValidation = () => {
    let tempError = "";

    if (questionsInfo.tags === undefined || questionsInfo.tags.length === 0) {
      tempError = true;
    }

    if (tempError) {
      setErrors(tempError);
      return false;
    }

    setErrors(tempError);
    return true;
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const ok = handleValidation();
    console.log(errors);

    if (ok) {
      axios.post(api.addQuestion, questionsInfo).then(response => {
        console.log(response);
      });
      setmodal(true);
      setTimeout(() => {
        setmodal(false);
      }, 1000);
    }
  };

  return (
    <>
      <QuestionBarView
        tags={topics}
        questionHandler={onQuestionChange}
        tagHandler={onTagChange}
        SubmitHandler={onSubmitHandler}
        modal={modal}
        error={errors}
      />
    </>
  );
};

export default QuestionBar;
