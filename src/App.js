import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecryption, turnRightRotor } from "./app/reducers/rotorReducer";
import { EnigmaBook } from "./components/EnigmaBook/EnigmaBook";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import LampBoard from "./components/LampBoard/LampBoard";
import PlugBoard from "./components/PlugBoard/PlugBoard";
import Rotors from "./components/Rotor/Rotors";
import RotorSettings from "./components/RotorSettings/RotorSettings";
import { KEYBOARD } from "./constants";
import typeSound from "./assets/mixkit-single-key-press-in-a-laptop-2541.wav";
import "./style/App.css";

function App() {
  const plugBoard = useSelector((state) => state.plugBoard);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const sound = new Audio(typeSound);

  const playSound = () => {
    sound.currentTime = 0;
    sound.play();
  };

  const handleKeyboard = (currentKey) => {
    const allowedKey = KEYBOARD.find((key) => key === currentKey);
    if (allowedKey) {
      dispatch(turnRightRotor());
      dispatch(getDecryption({ currentKey, plugBoard }));
      playSound();
    }
  };

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
          <PlugBoard />
        </div>
      </div>
    </>
  );
}

export default App;
