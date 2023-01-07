import React, { useEffect, useRef, useState } from "react";
import { KEYBOARD } from "../../constants";
import Plug from "./Plug";
import "./PlugBoard.css";
const PlugBoard = ({ setPlugBoard }) => {
  const usePlug = useRef();

  const [plugList, setPlugList] = useState([]);
  const [pairPlugs, setPairPlugs] = useState([]);
  const [plugColors, setPlugColors] = useState([
    "red",
    "blue",
    "pink",
    "yellow",
    "green",
    "orange",
    "purple",
    "skyblue",
    "black",
    "darkblue",
    "gray",
    "violet",
    "sienna",
  ]);

  const handleOnClick = (e) => {
    let clickedElement = e.target;
    let clickedText = e.target.innerText;

    if (
      !clickedElement.getAttribute("plugged") &&
      pairPlugs[0] !== clickedElement
    ) {
      if (pairPlugs.length < 2) {
        setPairPlugs((prev) => prev.concat(clickedElement));
        clickedElement.style.background = plugColors[0];
      }
    } else {
      if (pairPlugs.length === 0 || pairPlugs[0] === clickedElement) {
        let pluggedLetter = clickedElement.getAttribute("plugged");
        let removedColor = [...plugColors];
        removedColor.unshift(clickedElement.style.background);

        plugList.forEach((plug) => {
          if (plug.innerText === pluggedLetter) {
            plug.removeAttribute("plugged");
            plug.removeAttribute("style");
          } else if (plug.innerText === clickedText) {
            plug.removeAttribute("plugged");
            plug.removeAttribute("style");
          }
        });

        let updatedValue = {};
        updatedValue[pluggedLetter] = "";
        updatedValue[clickedText] = "";

        setPlugBoard((prev) => {
          return { ...prev, ...updatedValue };
        });
        setPlugColors([...removedColor]);
        setPairPlugs([]);
      }
    }
  };

  useEffect(() => {
    setPlugList(usePlug.current.childNodes);
  }, []);

  useEffect(() => {
    if (pairPlugs.length === 2) {
      let updatedValue = {};
      updatedValue[pairPlugs[0].innerText] = pairPlugs[1].innerText;
      updatedValue[pairPlugs[1].innerText] = pairPlugs[0].innerText;

      let removedColor = [...plugColors];
      removedColor.shift();

      pairPlugs[0].setAttribute("plugged", pairPlugs[1].innerText);
      pairPlugs[1].setAttribute("plugged", pairPlugs[0].innerText);

      setPlugColors([...removedColor]);
      setPlugBoard((prev) => {
        return { ...prev, ...updatedValue };
      });
      setPairPlugs([]);
    }
  }, [pairPlugs, setPlugColors, plugColors, setPlugBoard]);

  return (
    <div className="plugboard" ref={usePlug}>
      {KEYBOARD.map((plug) => {
        return <Plug key={plug} plug={plug} handleOnClick={handleOnClick} />;
      })}
    </div>
  );
};

export default PlugBoard;
