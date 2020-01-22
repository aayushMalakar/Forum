import React from "react";
import { Form, Input, Button, Grid, Header, Icon } from "semantic-ui-react";

import "./login.css";

const Login = props => {
  return (
    <>
      <Form id="login">
        <Header as="h2" textAlign="center">
          Forum
        </Header>
        <Form.Field
          control={Input}
          label="Email"
          placeholder="joe@schmoe.com"
          iconPosition="left"
          icon={<Icon name="at" />}
        />

        <Form.Input
          type="password"
          label="Password"
          placeholder="Password"
          iconPosition="left"
          icon={<Icon name="key" />}
        />

        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Login"
          align="center"
          fluid
        />
      </Form>
    </>
  );
};

export default Login;
