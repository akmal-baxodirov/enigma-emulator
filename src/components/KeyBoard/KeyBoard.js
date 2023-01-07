import React, { useEffect, useRef, useState } from "react";
import { KEYBOARD } from "../../constants";
import Key from "./Key";
import "./KeyBoard.css";
import typeSound from "../../assets/mixkit-single-key-press-in-a-laptop-2541.wav";

const KeyBoard = ({ handleKeyboard }) => {
  const [keyElements, setKeyElements] = useState([]);
  const keyRef = useRef(null);
  const sound = new Audio(typeSound);

  const playSound = () => {
    sound.currentTime = 0;
    sound.play();
  };

  const handleKeyDown = (e) => {
    let currentKey = e.key.toUpperCase();

    keyElements.forEach((key) => {
      if (key.innerText === currentKey) {
        key.classList.add("active");
      }
    });
    handleKeyboard(currentKey);
    playSound();
  };
  const handleKeyUp = (e) => {
    keyElements.forEach((key) => {
      key.classList.remove("active");
    });
  };

  const handleOnMouseDown = (e) => {
    let currentKey = e.target.innerText;
    e.target.classList.add("active");

    handleKeyboard(currentKey);
    playSound();
  };

  const handleOnMouseUp = (e) => {
    keyElements.forEach((key) => {
      key.classList.remove("active");
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    setKeyElements(keyRef.current.childNodes);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
    // eslint-disable-next-line
  }, [keyElements]);

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
