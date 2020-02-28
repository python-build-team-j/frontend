import React from "react";
import RegisterForm from "./Auth/RegisterForm";
import LoginForm from "./Auth/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
