import React from "react";
import MoveButton from "./MoveButton";
const MoveButtons = props => {
  return (
    <div>
      <MoveButton direction="n" />
      <div>
        <MoveButton direction="w" />
        <MoveButton direction="e" />
      </div>
      <MoveButton direction="s" />
    </div>
  );
};

export default MoveButtons;
