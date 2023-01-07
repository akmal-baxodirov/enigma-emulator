import React from "react";

const Plug = ({ plug }) => {
  return (
    <div className={`plug ${plug === "A" ? " keyNewLine" : ""}`}>{plug}</div>
  );
};

export default Plug;
