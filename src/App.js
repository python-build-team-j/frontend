//dependencies
import React from "react";
import { Route } from "react-router-dom";

//components
import Home from "./Home/Home";
import RegisterForm from "./Auth/RegisterForm";
import LoginForm from "./Auth/LoginForm";
import Start from "./StartScreen/Start";
import Game from "./GameView/Game";

import "./App.css";

function App() {
  // Routes:
  // /
  // /login
  // /register
  // /game - play the game
  // /start - choose to start a new game or a saved one

  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
      <Route path="/start">
        <Start />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
    </div>
  );
}

export default App;
