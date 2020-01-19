import React, { useState } from "react";

import Comment from "./Comment";
import CommentBox from "./CommentBox";
import CommentIneraction from "./CommentIneraction";

const Comments = props => {
  return (
    <div>
      <CommentBox></CommentBox>
      <Comment></Comment>
      <CommentIneraction></CommentIneraction>
    </div>
  );
};

export default Comments;
