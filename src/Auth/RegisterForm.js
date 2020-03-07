import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 50%;
  margin: 50px auto;
  padding: 50px 5%;
  background-color: forestgreen;
  border: 5px solid ;
  border-radius: 5px;
`;

const RegisterForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password1: "",
    password2: ""
  });

  const handleChanges = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { username, email, password1, password2 } = formState;

    axios
      .post("https://lambda-mud-test.herokuapp.com/api/registration/", {
        username,
        email,
        password1,
        password2
      })
      .then(res => {
        console.log(res);
        //res.data.key
      })
      .catch(err => {
        alert(err);
      });

    setFormState({
      email: "",
      username: "",
      password1: "",
      password2: ""
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>Username:</Label>
        <Input
          type="text"
          name="username"
          onChange={handleChanges}
          value={formState.username}
          required
        />
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={handleChanges}
            value={formState.email}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            name="password1"
            onChange={handleChanges}
            value={formState.password1}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password Confirmation:</Label>
          <Input
            type="password"
            name="password2"
            onChange={handleChanges}
            value={formState.password2}
            required
          />
        </FormGroup>
        <Button primary type="submit">
          Register
        </Button>
      </Form>
    </FormContainer>
  );
};

export default RegisterForm;
