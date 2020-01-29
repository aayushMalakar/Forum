import React, { useState } from 'react';
import axios from 'axios';
import QuestionBarView from './questionBarView';
import api from '../../../Services/Api/api';

const QuestionBar = props => {
  const topics = [
    { key: 'education', text: 'Education', value: 'education' },
    { key: 'science', text: 'Science', value: 'science' },
    { key: 'politics', text: 'Politics', value: 'politics' },
    { key: 'sports', text: 'Sports', value: 'sports' },
    { key: 'philosophy', text: 'Philosophy', value: 'philosophy' },
    { key: 'tech', text: 'Tech', value: 'tech' },
    { key: 'entertainment', text: 'Entertainment', value: 'entertainment' },
    { key: 'health', text: 'Health', value: 'health' }
  ];
  const [questionsInfo, setQuestionsInfo] = useState({
    questioner: localStorage.getItem('username')
  });
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
  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post(api.addQuestion, questionsInfo).then(response => {
      console.log(response);
    });
  };

  return (
    <>
      <QuestionBarView
        tags={topics}
        questionHandler={onQuestionChange}
        tagHandler={onTagChange}
        SubmitHandler={onSubmitHandler}
      />
    </>
  );
};

export default QuestionBar;
