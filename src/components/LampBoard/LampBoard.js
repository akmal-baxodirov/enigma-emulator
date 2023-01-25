import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { KEYBOARD } from "../../constants";
import Lamp from "./Lamp";
import "./Lampboard.css";

const LampBoard = () => {
  const { letter } = useSelector((state) => state.rotor);
  const lampRef = useRef([]);
  const [lamps, setLamps] = useState([]);

  useEffect(() => {
    lamps.forEach((lamp) => {
      lamp.classList.remove("lampOn");
      if (lamp.innerHTML === letter) {
        lamp.classList.add("lampOn");
        setTimeout(() => {
          lamp.classList.remove("lampOn");
        }, 1000);
      }
    });
  }, [letter, lamps]);

  useEffect(() => {
    setLamps(lampRef.current.childNodes);
  }, [setLamps]);

  return (
    <div className="lampboard" ref={lampRef}>
      {KEYBOARD.map((letter) => {
        return <Lamp key={letter} letter={letter} />;
      })}
    </div>
  );
};

export default LampBoard;
