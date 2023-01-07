import React from "react";

const Key = ({ singleKey }) => {
  return (
    <div className={`key${singleKey === "A" ? " keyNewLine" : ""}`}>
      {singleKey}
    </div>
  );
};

export default Key;
