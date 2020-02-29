import React from "react";
import axios from "axios";
const MoveButton = props => {
  const movementHandler = event => {
    console.log(props.direction);
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init", {
        headers: {
          Authorization: `Token ${localStorage.getItem("key")}`
        },
        data: { direction: props.direction }
      })
      .then(res => console.log(res))
      .catch(err => alert(err));
  };

  const directionButtonText =
    props.direction === "n" ? (
      <span>🔼</span>
    ) : props.direction === "s" ? (
      <span>🔽</span>
    ) : props.direction === "w" ? (
      <span>◀</span>
    ) : props.direction === "e" ? (
      <span>▶</span>
    ) : null;

  return <button onClick={movementHandler}>{directionButtonText}</button>;
};

export default MoveButton;
