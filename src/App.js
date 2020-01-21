import React from "react";
import "./App.css";

import LandingPage from "./Containers/LandingPage";
import ForumDetails from "./Containers/ForumDetails";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <LandingPage />
      <ForumDetails />
    </div>
  );
}

export default App;
