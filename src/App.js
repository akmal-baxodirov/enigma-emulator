import React from "react";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import LampBoard from "./components/LampBoard/LampBoard";
import PlugBoard from "./components/PlugBoard/PlugBoard";
import Rotors from "./components/Rotor/Rotors";
import "./style/App.css";

function App() {
  return (
    <div className="enigmaWrapper">
      <div className="enigma">
        <Rotors />
        <LampBoard />
        <div className="line"></div>
        <KeyBoard />
        <div className="line"></div>
        <PlugBoard />
      </div>
    </div>
  );
}

export default App;
