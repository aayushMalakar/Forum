import React from "react";
import { Card } from "semantic-ui-react";

import "./cardStyle.css";

const Cards = props => {
  return (
    <>
      <Card
        fluid
        href="#card-example-link-card"
        header="Best framework or library to built frontend"
        meta="Nitesh shrestha"
        description="I am new to Js and i know little about the framework and library to built front end application. I need help to find a good framework to learn for begineers."
      />
    </>
  );
};

export default Cards;
