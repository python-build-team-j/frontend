import React from "react";
import axios from "axios";
const MoveButton = props => {
  const movementHandler = event => {
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init", {
        headers: {
          Authorization: `Token ${localStorage.getItem("key")}`
        },
        data: { direction: props.direction }
      })
      .then(res => {
        console.log(res);
        let sampleRes = {
          uuid: "95c3bf64-5c4f-4a3a-b856-8e0c33b90f27",
          name: "irasanchez",
          title: "Outside Cave Entrance",
          description: "North of you, the cave mount beckons",
          players: ["all the players"]
        };
        props.setCurrentRoom(sampleRes);
      })
      .catch(err => alert(err));
  };

  const directionButtonText =
    props.direction === "n" ? (
      <span>👆</span>
    ) : props.direction === "s" ? (
      <span>👇</span>
    ) : props.direction === "w" ? (
      <span>👈</span>
    ) : props.direction === "e" ? (
      <span>👉</span>
    ) : null;

  return <button onClick={movementHandler}>{directionButtonText}</button>;
};

export default MoveButton;
