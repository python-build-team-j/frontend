import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Modal from "react-modal";
import Map from "./Map";
import MoveButtons from "../Movement/MoveButtons";
//my thought is that this component would swap components out for each of the rooms within this view
const Game = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={handleModal}>
        <Map handleModal={handleModal} />
      </Modal>
      <div>
        <button onClick={handleModal}>Map</button>
        <MoveButtons />
      </div>
    </div>
  );
};

export default Game;
