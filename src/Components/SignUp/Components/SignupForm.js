import React, { useContext } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { Form, Button, Header, Icon, Message } from "semantic-ui-react";
import { UserContext } from "../../../Services/UserContext/UserContext";

const SignUp = ({ handleChange, handleSubmit, validate }) => {
  const users = useContext(UserContext);
  return (
    <div className="signUpform">
      <Form className="attached fluid segment" onSubmit={handleSubmit}>
        <Header as="h2" textAlign="center">
          Sign up
        </Header>
        <Form.Input
          label="Full Name"
          iconPosition="left"
          icon={<Icon name="user" color="blue" />}
          name="name"
          value={users.name}
          onChange={handleChange}
          required
          id="input_id"
          {...validate.fullNameError}
        />
        <Form.Input
          label="Email"
          type="email"
          iconPosition="left"
          icon={<Icon name="at" color="blue" />}
          name="email"
          value={users.email}
          onChange={handleChange}
          required
          {...validate.emailError}
        />
        <Form.Input
          type="password"
          label="Password"
          iconPosition="left"
          icon={<Icon name="key" color="blue" />}
          name="password"
          value={users.password}
          onChange={handleChange}
          required
          {...validate.passwordError}
        />
        <Form.Input
          type="password"
          label="Repeat Password"
          iconPosition="left"
          icon={<Icon name="key" color="blue" />}
          name="repassword"
          value={users.repassword}
          onChange={handleChange}
          required
          {...validate.retypePassword}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Sign up"
          align="center"
          fluid
        />
      </Form>
      <Message attached="bottom" warning>
        <Icon name="help" />
        Already signed up?&nbsp;
        <Link to="/login">Login here</Link>
        &nbsp;instead.
      </Message>
    </div>
  );
};

export default SignUp;
