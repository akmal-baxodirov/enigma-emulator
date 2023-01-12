import React from "react";
import { useSelector } from "react-redux";
import Rotor from "./Rotor";
import "./Rotor.css";
const Rotors = ({ setModal }) => {
  const { leftRotorEntry, middleRotorEntry, rightRotorEntry } = useSelector(
    (state) => state.rotor
  );
  const handleModal = () => {
    setModal(true);
  };
  return (
    <div className="rotors">
      <Rotor wheel={leftRotorEntry} handleModal={handleModal} />
      <Rotor wheel={middleRotorEntry} handleModal={handleModal} />
      <Rotor wheel={rightRotorEntry} handleModal={handleModal} />
    </div>
  );
};

export default Rotors;
