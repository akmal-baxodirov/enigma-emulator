import React from "react";

const Lamp = ({ letter }) => {
  return (
    <div className={`lamp ${letter === "A" ? " keyNewLine" : ""}`}>
      {letter}
    </div>
  );
};

export default Lamp;
