import React from "react";
import Rotor from "./Rotor";
import "./Rotor.css";
const Rotors = ({ leftRotor, middleRotor, rightRotor }) => {
  return (
    <div className="rotors">
      <Rotor wheel={leftRotor} />
      <Rotor wheel={middleRotor}/>
      <Rotor wheel={rightRotor}/>
    </div>
  );
};

export default Rotors;
