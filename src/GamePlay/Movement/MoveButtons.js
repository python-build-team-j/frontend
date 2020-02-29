import React from "react";
import MoveButton from "./MoveButton";
const MoveButtons = props => {
  return (
    <div>
      <MoveButton direction="n" {...props} />
      <div>
        <MoveButton direction="w" {...props} />
        <MoveButton direction="e" {...props} />
      </div>
      <MoveButton direction="s" {...props} />
    </div>
  );
};

export default MoveButtons;
