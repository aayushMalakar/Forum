import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// IMPORTING COMPONENTS
import Navbar from "./Components/Navbar";
import SignUpPage from "./Components/SignUp";
import LoginPage from "./Components/Login";
import QuestionBar from "./Components/QuestionBar";
import Card from "./Components/Card";

import { SearchProvider } from "./Services/SearchContext/SearchContext";
import Search from "./Components/Search";

// CONTEXT MANAGEMENT
import { UserProvider } from "./Services/UserContext/UserContext";

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Router>
          <Navbar />
          <UserProvider>
            <Route path="/home" exact component={QuestionBar} />
            <Route path="/home" exact component={Card} />
            <Route path="/search" exact component={Search} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="(/|/login)" exact component={LoginPage} />
          </UserProvider>
        </Router>
      </div>
    </SearchProvider>
  );
}

export default App;
