//dependencies
import React from "react";
import { Link, Route, Switch } from "react-router-dom";

//components
import Home from "./Home/Home";
import RegisterForm from "./Auth/RegisterForm";
import LoginForm from "./Auth/LoginForm";
import Start from "./StartScreen/Start";
import Game from "./GameView/Game";
import About from "./components/About";
import Instructions from "./components/Instructions";

import "./App.css";


function App() {
  return (
    <div className="App">
      <header>
        <nav className='app-nav'>
          <Link to='/about'>About</Link>
          <Link to='/instructions'>How To Play</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login'render={() => (
          <LoginForm 
            logInHandler={this.logInHandler}
            history={this.props.history}
          />
        )}
        />
        <Route path='/register' component={RegisterForm} />
        <Route path='/start' component={Start} />
        <Route path='/game' component={Game} />
      </Switch>
    </div>
  );
}

export default App;
