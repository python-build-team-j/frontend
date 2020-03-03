import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Modal from "react-modal";
import Map from "./Map";
import MoveButtons from "../Movement/MoveButtons";
import styled from "styled-components";
//my thought is that this component would swap components out for each of the rooms within this view
const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 90vh;
  div {
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
const Game = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <StyledGame>
      <Modal isOpen={modalIsOpen} onRequestClose={handleModal}>
        <Map handleModal={handleModal} />
      </Modal>
      <div>Display current room here</div>
      <div className="controls">
        <button onClick={handleModal}>Map</button>
        <MoveButtons />
      </div>
    </StyledGame>
  );
};

export default Game;
