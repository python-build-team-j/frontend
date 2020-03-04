import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Our Awesome Game</h1>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Home;
