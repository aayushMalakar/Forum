import React, { useState } from 'react';
import axios from 'axios';
import Login from './LoginForm';
import api from '../../../Services/Api/api';

const LoginLogic = () => {
  const [user, setUser] = useState([]);
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);

    axios
      .post(api.logUser, user)
      .then(response => {
        console.log(response, '$$');
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('loggedUserID', response.data.id);
        if (
          (localStorage.getItem('username') &&
            localStorage.getItem('token')) !== 'undefined'
        ) {
          console.log('Login sucessfully');
          window.location.href = '/home';
        }
      })
      .catch(error => {
        console.log(error.response, '@@');
      });
  };
  return (
    <div>
      <Login handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};
export default LoginLogic;
