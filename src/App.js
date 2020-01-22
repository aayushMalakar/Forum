import React from "react";
import "./App.css";

import LandingPage from "./Containers/LandingPage";
import ForumDetails from "./Containers/ForumDetails";

import LoginPage from "./Containers/LoginPage";
import SignUpPage from "./Containers/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* {/* <LandingPage />
      <ForumDetails /> */}
      <SignUpPage></SignUpPage>
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
