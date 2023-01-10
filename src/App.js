import React, { useState } from "react";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import LampBoard from "./components/LampBoard/LampBoard";
import PlugBoard from "./components/PlugBoard/PlugBoard";
import Rotors from "./components/Rotor/Rotors";
import RotorSettings from "./components/RotorSettings/RotorSettings";
import { getRotor, REFLECTOR_B } from "./constants";
import { Enigma } from "./service/Enigma";

import "./style/App.css";

function App() {
  const [rotorSettings, setRotorSettings] = useState({
    reflector: "REFLECTOR_B",
    rotor1: "I",
    rotor2: "II",
    rotor3: "III",
    rotor1Init: "A",
    rotor2Init: "A",
    rotor3Init: "A",
  });
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
  const [modal, setModal] = useState(false);

  const [wheels, setWheels] = useState({
    leftRotor: enigma.leftRotorEntry,
    middleRotor: enigma.middleRotorEntry,
    rightRotor: enigma.rightRotorEntry,
  });

  const handleKeyboard = (key) => {
    enigma.turnRightRotor();
    enigma.getDecryption(key);
    setWheels({
      leftRotor: enigma.leftRotorEntry,
      middleRotor: enigma.middleRotorEntry,
      rightRotor: enigma.rightRotorEntry,
    });
  };

  console.log(rotorSettings);

  return (
    <div className="enigmaWrapper">
      <div className="enigma">
        <RotorSettings
          rotorSettings={rotorSettings}
          setRotorSettings={setRotorSettings}
          setModal={setModal}
          modal={modal}
        />

        <Rotors
          leftRotor={wheels.leftRotor}
          middleRotor={wheels.middleRotor}
          rightRotor={wheels.rightRotor}
          setModal={setModal}
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
