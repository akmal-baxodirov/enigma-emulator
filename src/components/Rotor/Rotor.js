import React from "react";
const Rotor = ({ wheel }) => {
  return (
    <div className="rotor">
      <div className="letter">{wheel[1]}</div>
      <div className="letter">{wheel[0]}</div>
      <div className="letter">{wheel[wheel.length - 1]}</div>
    </div>
  );
};

export default Rotor;
