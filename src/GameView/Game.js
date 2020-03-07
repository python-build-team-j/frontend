import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import MoveButtons from "../Movement/MoveButtons";
import styled from "styled-components";
//my thought is that this component would swap components out for each of the rooms within this view
const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 90vh;
  .controls {
    padding: 10px 5%;
    display: flex;
    justify-content: flex-end;
  }
`;
const Game = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <StyledGame>
      <div>Display current room here</div>
      <div className="controls">
        <MoveButtons />
      </div>
    </StyledGame>
  );
};

export default Game;
