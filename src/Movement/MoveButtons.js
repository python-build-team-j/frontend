import React from "react";
import MoveButton from "./MoveButton";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  background: grey;
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50%;
  border: 3px solid green;
  div {
    background: grey;
    width: 95%;
    display: flex;
    justify-content: space-evenly;
  }
  span,
  button {
    background: grey;
  }
`;

const MoveButtons = props => {
  return (
    <StyledButtonContainer>
      <MoveButton direction="n" {...props} />
      <div>
        <MoveButton direction="w" {...props} />
        <MoveButton direction="e" {...props} />
      </div>
      <MoveButton direction="s" {...props} />
    </StyledButtonContainer>
  );
};

export default MoveButtons;
