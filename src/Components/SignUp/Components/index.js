import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import api from "../../../Services/Api/api";
import Signup from "./SignupForm";
import { UserContext } from "../../../Services/UserContext/UserContext";

const SignupLogic = () => {
  const [users, setUsers] = useContext(UserContext);

  const [errors, setErrors] = useState({
    fullNameError: {},
    passwordError: {},
    retypePassword: {},
    emailError: {}
  });

  const history = useHistory();

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handlevalidation = () => {
    let tempError = {};
    if (users.name.length < 6) {
      tempError = {
        ...tempError,
        fullNameError: {
          error: {
            content: "Name should of minimum 6 characters",
            pointing: "above"
          }
        }
      };
    }

    if (users.password.length < 6) {
      tempError = {
        ...tempError,
        passwordError: {
          error: {
            content: "password should of minimum 6 characters",
            pointing: "above"
          }
        }
      };
    }

    if (users.repassword !== users.password) {
      tempError = {
        ...tempError,
        retypePassword: {
          error: {
            content: "Password and Repeat password doesn'nt match",
            pointing: "above"
          }
        }
      };
    }

    if (Object.values(tempError).length > 0) {
      setErrors({ ...tempError });
      return false;
    }
    return true;
  };

  const EmailonfocusHandler = () => {};

  const handleSubmit = e => {
    e.preventDefault();

    let ok = handlevalidation();
    let tempError;

    if (ok) {
      axios
        .post(api.addUser, users)
        .then(response => {
          console.log(response);
          console.log("User added successfully");
          setUsers({
            name: "",
            email: "",
            password: "",
            repassword: ""
          });
          history.push("/");
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data.emailErrorMsg, "@@");
            tempError = {
              ...errors,
              emailError: {
                error: {
                  content: error.response.data.emailErrorMsg,
                  pointing: "above"
                }
              }
            };
            setErrors({ ...tempError });
          }
        });

      // console.log(tempError);

      // if (tempError) {
      //   const errArray = Object.values(tempError);
      //   console.log(Object.values(tempError));
      //   if (Object.keys(errArray[3]).length === 0) {
      //     history.push("/");
      //   }
      // }
    }
  };

  return (
    <div>
      <Signup
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        validate={errors}
      />
    </div>
  );
};

export default SignupLogic;
