import React from "react";
import { Card } from "semantic-ui-react";
import "./ForumListStyle.css";

const ForumList = props => {
  return (
    <>
      <Card fluid>
        <ul>
          <li>Title : </li>
          <li>Date</li>
          <li>MetaData</li>
        </ul>
      </Card>
    </>
  );
};

export default ForumList;
