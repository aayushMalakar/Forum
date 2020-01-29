import React, { useState } from "react";
import axios from "axios";

import Login from "./LoginForm";
import api from "../../../Services/Api/api";

import { useHistory } from "react-router-dom";

const LoginLogic = () => {
  const [user, setUser] = useState([]);

  const [error, setError] = useState("");

  const history = useHistory();

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const focusHandler = () => {
    setError("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);

    axios
      .post(api.logUser, user)
      .then(response => {
        console.log(response, "$$");
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("loggedUserID", response.data.id);
        if (
          (localStorage.getItem("username") &&
            localStorage.getItem("token")) !== "undefined"
        ) {
          console.log("Login sucessfully");
          history.push("/home");
        } else {
          setError(response.data.loginError);
        }
      })
      .catch(error => {
        console.log(error, "@@");
      });
  };
  return (
    <div>
      <Login
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        focusHandler={focusHandler}
      />
    </div>
  );
};
export default LoginLogic;
