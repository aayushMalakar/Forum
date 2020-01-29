import React, { useContext } from 'react';
import axios from 'axios';
import api from '../../../Services/Api/api';
import Signup from './SignupForm';
import { UserContext } from '../../../Services/UserContext/UserContext';

const SignupLogic = () => {
  const [users, setUsers] = useContext(UserContext);

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(users);

    axios
      .post(api.addUser, users)
      .then(response => {
        console.log(response);
        console.log('User added successfully');
        setUsers({
          name: '',
          email: '',
          password: '',
          repassword: ''
        });
      })
      .catch(error => {
        console.log(error.response, '@@');
      });
  };

  return (
    <div>
      <Signup handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignupLogic;
