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
      .then(res => {
        /* res data shape
          {
            uuid: "95c3bf64-5c4f-4a3a-b856-8e0c33b90f27",
            name: "irasanchez",
            title: "Outside Cave Entrance", 
            description: "North of you, the cave mount beckons",
            players: ["all the players listed here"]
          };
        */
      })
      .catch(err => alert(err));
  };
  return <button onClick={clickHandler}>New Game</button>;
};

export default NewGameButton;
