import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecryption, turnRightRotor } from "./app/reducers/rotorReducer";
import { EnigmaBook } from "./components/EnigmaBook/EnigmaBook";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import LampBoard from "./components/LampBoard/LampBoard";
import PlugBoard from "./components/PlugBoard/PlugBoard";
import Rotors from "./components/Rotor/Rotors";
import RotorSettings from "./components/RotorSettings/RotorSettings";
import "./style/App.css";

function App() {
  const rotor = useSelector((state) => state.rotor);
  const dispatch = useDispatch();

  const [plugBoard, setPlugBoard] = useState({
    Q: "",
    W: "",
    E: "",
    R: "",
    T: "",
    Z: "",
    U: "",
    I: "",
    O: "",
    A: "",
    S: "",
    D: "",
    F: "",
    G: "",
    H: "",
    J: "",
    K: "",
    P: "",
    Y: "",
    X: "",
    C: "",
    V: "",
    B: "",
    N: "",
    M: "",
    L: "",
  });
  const [modal, setModal] = useState(false);

  const handleKeyboard = (key) => {
    dispatch(turnRightRotor());
    dispatch(getDecryption(key));
  };
  console.log(rotor);

  return (
    <>
      <EnigmaBook />
      <div className="enigmaWrapper">
        <div className="enigma">
          <RotorSettings setModal={setModal} modal={modal} />
          <Rotors setModal={setModal} />
          <LampBoard />
          <div className="line"></div>
          <KeyBoard handleKeyboard={handleKeyboard} />
          <div className="line"></div>
          <PlugBoard setPlugBoard={setPlugBoard} />
        </div>
      </div>
    </>
  );
}

export default App;
