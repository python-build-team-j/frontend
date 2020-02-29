import React, { useEffect } from "react";
import axios from "axios";

const NewGameButton = () => {
  const clickHandler = () => {
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init", {
        headers: {
          Authorization: `Token ${localStorage.getItem("key")}`
        }
      })
      .then()
      .catch(err => alert(err));
  };
  return <button onClick={clickHandler}>New Game</button>;
};

export default NewGameButton;
