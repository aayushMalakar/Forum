import React from "react";

import { Form, Input, Button, Grid, Header, Icon } from "semantic-ui-react";

const SignUp = props => {
  return (
    <>
      <Form id="login">
        <Header as="h2" textAlign="center">
          Sign up
        </Header>

        <Form.Field
          control={Input}
          label="Full Name"
          placeholder="Full Name"
          iconPosition="left"
          icon={<Icon name="user" />}
        />

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
          content="Sign up"
          align="center"
          fluid
        />
      </Form>
    </>
  );
};

export default SignUp;
