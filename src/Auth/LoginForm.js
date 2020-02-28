import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });

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
        console.log(res);
        //res.data.key
      })
      .catch(err => {
        alert(err);
      });

    setFormState({ username: "", password: "" });
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
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChanges}
            value={formState.password}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
