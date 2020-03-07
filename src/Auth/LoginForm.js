import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 50%;
  margin: 50px auto;
  padding: 50px 5%;
  background-color: lightgreen;
  border: 5px solid green;
  border-radius: 5px;
`;

const LoginForm = props => {
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });

  let history = useHistory();

  const handleChanges = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { username, password } = formState;

    axios
      .post("https://lambda-mud-test.herokuapp.com/api/login/", {
        username,
        password
      })
      .then(res => {
        console.log(res.data.key);
        localStorage.setItem("key", res.data.key);
        setFormState({ username: "", password: "" });
        history.push("/start");
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            name="username"
            onChange={handleChanges}
            value={formState.username}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            onChange={handleChanges}
            value={formState.password}
            required
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
