import React from "react";
import axios from "axios";

export const addPost = async () => {
  const data = await axios.post("https://jsonplaceholder.typicode.com/todos", {
    someparameter: "parameter"
  });
  const res = await res.json();
};

export const loadPost = async () => {
  try {
    const res = await axios.get("http://192.168.0.4:3001/api/user/ayush");
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
