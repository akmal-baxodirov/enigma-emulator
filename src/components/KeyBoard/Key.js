import React from "react";

const Key = ({ singleKey, handleOnMouseDown, handleOnMouseUp }) => {
  return (
    <button
      className={`key${singleKey === "A" ? " keyNewLine" : ""}`}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
    >
      {singleKey}
    </button>
  );
};

export default Key;
