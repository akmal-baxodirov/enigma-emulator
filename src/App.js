import React, { useState } from "react";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import LampBoard from "./components/LampBoard/LampBoard";
import PlugBoard from "./components/PlugBoard/PlugBoard";
import Rotors from "./components/Rotor/Rotors";
import "./style/App.css";

function App() {
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

  const handleKeyboard = (key) => {
    console.log(key);
  };

  console.log(plugBoard);
  return (
    <div className="enigmaWrapper">
      <div className="enigma">
        <Rotors />
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
