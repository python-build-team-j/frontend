import React from "react";
import RegisterForm from "./Auth/RegisterForm";
import LoginForm from "./Auth/LoginForm";
import NewGameButton from "./GamePlay/NewGameButton";
import MoveButtons from "./GamePlay/Movement/MoveButtons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RegisterForm />
      <LoginForm />
      <NewGameButton />
      <MoveButtons />
    </div>
  );
}

export default App;
