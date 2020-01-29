import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Form, Input, Button, Header, Icon, Message } from "semantic-ui-react";

const Login = props => {
  return (
    <div className="loginForm">
      <Form className="attached fluid segment" onSubmit={props.handleSubmit}>
        <Header as="h2" textAlign="center">
          Login
        </Header>

        {props.error !== "" ? (
          <Message negative>
            <Message.Header id="msg-header">{props.error}</Message.Header>
          </Message>
        ) : null}

        <Form.Field
          type="email"
          control={Input}
          label="Email"
          iconPosition="left"
          icon={<Icon name="at" color="blue" />}
          name="email"
          onChange={props.handleChange}
          required
          onFocus={props.focusHandler}
        />
        <Form.Input
          type="password"
          label="Password"
          iconPosition="left"
          icon={<Icon name="key" color="blue" />}
          name="password"
          onChange={props.handleChange}
          required
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Login"
          align="center"
          fluid
        />
      </Form>
      <Message attached="bottom" warning>
        <Icon name="help" />
        New here?&nbsp;
        <Link to="/signup">Sign Up</Link>
        &nbsp;today.
      </Message>
    </div>
  );
};

export default Login;
