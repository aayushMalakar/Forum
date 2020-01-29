import React, { useState, useEffect, useContext } from 'react';
import SearchView from './searchView';

//importing context
import { SearchContext } from '../../../Services/SearchContext/SearchContext';

// import api from "../../../Services/Api/api";

const Search = () => {
  const [questions, setQuestions] = useState([]);

  //using context api
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useContext(SearchContext);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    getSearchedQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const getSearchedQuestion = async () => {
    if (search !== '') {
      const getQuestion = await fetch(
        `http://localhost:3001/api/forum/getquestion/?q=${search}`
      );
      const data = await getQuestion.json();
      setQuestions(data);
    }
    setloading(false);
  };

  return (
    <SearchView
      questions={questions}
      search={search}
      loading={loading}
    ></SearchView>
  );
};

export default Search;
