import React from "react";
import RegisterForm from "./Auth/RegisterForm";
import LoginForm from "./Auth/LoginForm";
import NewGameButton from "./GamePlay/NewGameButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RegisterForm />
      <LoginForm />
      <NewGameButton />
    </div>
  );
}

export default App;
