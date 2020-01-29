import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import SearchView from "./searchView";

//importing context
import { SearchContext } from "../../../Services/SearchContext/SearchContext";

// import api from "../../../Services/Api/api";

const Search = () => {
  const [questions, setQuestions] = useState([]);

  //using context api
  const [search, setSearch] = useContext(SearchContext);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    getSearchedQuestion();
  }, [search]);

  const getSearchedQuestion = async () => {
    if (search !== "") {
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
