import React, { useState, createContext } from "react";

export const postContext = createContext();

export const Services = props => {
  const [post, setPost] = useState({});

  return <postContext.Provider>{props.children}</postContext.Provider>;
};
