import React, { useState } from "react";

import Comment from "./Comment";
import CommentBox from "./CommentBox";
import CommentIneraction from "./CommentIneraction";

const Comments = props => {
  return (
    <div>
      <Comment></Comment>
      <CommentIneraction></CommentIneraction>
      <CommentBox></CommentBox>
    </div>
  );
};

export default Comments;
