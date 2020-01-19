import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./Components/Card";
import Comments from "./Components/Comment";

function App() {
  return (
    <div className="App">
      Forum
      <Card></Card>
      <Comments></Comments>
    </div>
  );
}

export default App;
