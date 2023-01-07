import React from "react";
import { KEYBOARD } from "../../constants";
import Key from "./Key";
import "./KeyBoard.css";
const KeyBoard = () => {
  return (
    <div className="keyboard">
      {KEYBOARD.map((key) => {
        return <Key key={key} singleKey={key} />;
      })}
    </div>
  );
};

export default KeyBoard;
