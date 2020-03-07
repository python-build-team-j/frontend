import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import MoveButtons from "../Movement/MoveButtons";
import styled from "styled-components";
//my thought is that this component would swap components out for each of the rooms within this view
const StyledGame = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95vw;
  height: 97vh;
  margin: 10px auto 0 auto;
  border-radius: 15px;
  padding: 50px;
  h1,
  p {
    margin: 0 auto;
    color: green;
  }
  .controls {
    padding: 10px 5%;
    display: flex;
    justify-content: flex-end;
  }
`;
const Game = () => {
  const [currentRoom, setCurrentRoom] = useState({
    uuid: "95c3bf64-5c4f-4a3a-b856-8e0c33b90f27",
    name: "irasanchez",
    title: "Sample Room",
    description: "Some information about the room",
    players: ["all the players"]
  });

  return (
    <StyledGame>
      <h1 class="room">{currentRoom.title && currentRoom.title}</h1>
      <p>Some more information about the room goes here</p>
      <div className="controls">
        <MoveButtons setCurrentRoom={setCurrentRoom} />
      </div>
    </StyledGame>
  );
};

export default Game;
