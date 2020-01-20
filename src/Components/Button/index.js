import React from "react";
import { Icon } from "semantic-ui-react";
import "./buttonStyle.css";

const Cards = props => {
  return (
    <>
      <button>
        <Icon name={props.icon} />
      </button>
    </>
  );
};

export default Cards;

//"thumbs up outline"
