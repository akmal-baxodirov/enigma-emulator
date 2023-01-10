import React from "react";
import Rotor from "./Rotor";
import "./Rotor.css";
const Rotors = ({ leftRotor, middleRotor, rightRotor, setModal }) => {
  const handleModal = () => {
    setModal(true);
  };
  return (
    <div className="rotors">
      <Rotor wheel={leftRotor} handleModal={handleModal} />
      <Rotor wheel={middleRotor} handleModal={handleModal} />
      <Rotor wheel={rightRotor} handleModal={handleModal} />
    </div>
  );
};

export default Rotors;
