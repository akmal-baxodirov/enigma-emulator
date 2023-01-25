import React from "react";
import { useSelector } from "react-redux";
import "./EnigmaBook.css";
export const EnigmaBook = () => {
  const { text, encryptedText } = useSelector((state) => state.rotor);
  
  return (
    <div className="enigmaBook">
      <div className="text">
        <h3>PlainText</h3>
        <p>{text.match(/.{1,5}/g)?.join(" ")}</p>
      </div>
      <div className="text">
        <h3>CipherText</h3>
        <p>{encryptedText.match(/.{1,5}/g)?.join(" ")}</p>
      </div>
    </div>
  );
};
