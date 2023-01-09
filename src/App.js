import React, { useState } from "react";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import LampBoard from "./components/LampBoard/LampBoard";
import PlugBoard from "./components/PlugBoard/PlugBoard";
import Rotors from "./components/Rotor/Rotors";
import { getRotor, REFLECTOR_B } from "./constants";
import { Enigma } from "./service/Enigma";

import "./style/App.css";

function App() {
  const enigma = new Enigma(getRotor.III, getRotor.I, getRotor.II, REFLECTOR_B);

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

  const [wheels, setWheels] = useState({
    leftRotor: enigma.leftRotorEntry,
    middleRotor: enigma.middleRotorEntry,
    rightRotor: enigma.rightRotorEntry,
  });

  // console.log(enigma);

  const handleKeyboard = (key) => {
    enigma.turnRightRotor();
    enigma.getDecryption(key);
    setWheels({
      leftRotor: enigma.leftRotorEntry,
      middleRotor: enigma.middleRotorEntry,
      rightRotor: enigma.rightRotorEntry,
    });
  };

  return (
    <div className="enigmaWrapper">
      <div className="enigma">
        <Rotors
          leftRotor={wheels.leftRotor}
          middleRotor={wheels.middleRotor}
          rightRotor={wheels.rightRotor}
        />
        <LampBoard />
        <div className="line"></div>
        <KeyBoard handleKeyboard={handleKeyboard} />
        <div className="line"></div>
        <PlugBoard setPlugBoard={setPlugBoard} />
      </div>
    </div>
  );
}

export default App;
