import React from "react";
import { Card } from "semantic-ui-react";

import Header from "./Header";
import Body from "./Body";
import PostInteraction from "./postInteraction";

const Cards = props => {
  return (
    <>
      {/* <Header></Header>
      <Body></Body> */}
      <Card
        href="#card-example-link-card"
        header="Sunjay is always late"
        meta="Nitesh shrestha"
        description="Sunjay also known as crashpian is a loser that is always late."
      />
      <PostInteraction></PostInteraction>
    </>
  );
};

export default Cards;
