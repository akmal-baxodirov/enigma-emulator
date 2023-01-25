import React, { useEffect, useRef, useState } from "react";
import { KEYBOARD } from "../../constants";
import Key from "./Key";
import "./KeyBoard.css";

const KeyBoard = ({ handleKeyboard }) => {
  const [keyElements, setKeyElements] = useState([]);
  const keyRef = useRef(null);

  const handleKeyDown = (e) => {
    let currentKey = e.key.toUpperCase();
    keyElements.forEach((key) => {
      if (key.innerText === currentKey) {
        key.classList.add("active");
      }
    });
    handleKeyboard(currentKey);
  };

  const handleKeyUp = (e) => {
    let currentKey = e.key.toUpperCase();
    keyElements.forEach((key) => {
      if (key.innerText === currentKey) {
        key.classList.remove("active");
      }
    });
  };

  const handleOnMouseDown = (e) => {
    let currentKey = e.target.innerText;
    e.target.classList.add("active");

    handleKeyboard(currentKey);
  };

  const handleOnMouseUp = (e) => {
    e.target.classList.remove("active");
  };

  useEffect(() => {
    setKeyElements(keyRef.current.childNodes);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
    // eslint-disable-next-line
  }, [keyElements, handleKeyboard]);

  return (
    <div className="keyboard" ref={keyRef}>
      {KEYBOARD.map((key) => {
        return (
          <Key
            key={key}
            singleKey={key}
            handleOnMouseDown={handleOnMouseDown}
            handleOnMouseUp={handleOnMouseUp}
          />
        );
      })}
    </div>
  );
};

export default KeyBoard;
