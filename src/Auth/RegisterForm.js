import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={handleChanges}
            value={formState.username}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChanges}
            value={formState.email}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password1"
            onChange={handleChanges}
            value={formState.password1}
            required
          />
        </label>
        <label>
          Password Confirmation:
          <input
            type="password"
            name="password2"
            onChange={handleChanges}
            value={formState.password2}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
