import React from "react";
import { KEYBOARD } from "../../constants";
import Plug from "./Plug";
import "./PlugBoard.css";
const PlugBoard = () => {
  return (
    <div className="plugboard">
      {KEYBOARD.map((plug) => {
        return <Plug key={plug} plug={plug} />;
      })}
    </div>
  );
};

export default PlugBoard;
