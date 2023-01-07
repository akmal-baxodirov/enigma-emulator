import React from "react";

const Plug = ({ plug, handleOnClick }) => {
  return (
    <div
      className={`plug ${plug === "A" ? " keyNewLine" : ""}`}
      onClick={handleOnClick}
    >
      {plug}
    </div>
  );
};

export default Plug;
