import React from "react";
import { KEYBOARD } from "../../constants";
import Lamp from "./Lamp";
import "./Lampboard.css";

const LampBoard = () => {
  return (
    <div className="lampboard">
      {KEYBOARD.map((letter) => {
        return <Lamp key={letter} letter={letter} />;
      })}
    </div>
  );
};

export default LampBoard;
