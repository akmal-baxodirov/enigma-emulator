import React, { useState } from "react";
import "./RotorSettings.css";
import useRotorPosition from "../../customHooks/useRotorPosition";
import useSelectRotor from "../../customHooks/useSelectRouter";
import { useDispatch, useSelector } from "react-redux";
import { setRotorSettings } from "../../app/reducers/rotorReducer";

const RotorSettings = ({ setModal, modal }) => {
  const { rotorSettings } = useSelector((state) => state.rotor);
  const dispatch = useDispatch();

  const [reflector, setReflector] = useState(rotorSettings.reflector);

  const [rotor1, SelectFirstRotor] = useSelectRotor(rotorSettings.rotor1);
  const [rotor2, SelectSecondRotor] = useSelectRotor(rotorSettings.rotor2);
  const [rotor3, SelectThirdRotor] = useSelectRotor(rotorSettings.rotor3);

  const [rotor1Init, SelectFirstPosition] = useRotorPosition(
    rotorSettings.rotor1Init
  );
  const [rotor2Init, SelectSecondPosition] = useRotorPosition(
    rotorSettings.rotor2Init
  );
  const [rotor3Init, SelectThirdPosition] = useRotorPosition(
    rotorSettings.rotor3Init
  );

  const handleSubmit = () => {
    dispatch(
      setRotorSettings({
        reflector,
        rotor1,
        rotor2,
        rotor3,
        rotor1Init,
        rotor2Init,
        rotor3Init,
      })
    );
    setModal(false);
  };

  const handleCancel = () => {
    dispatch(
      setRotorSettings({
        reflector: rotorSettings.reflector,
        rotor1: rotorSettings.rotor1,
        rotor2: rotorSettings.rotor2,
        rotor3: rotorSettings.rotor3,
        rotor1Init: rotorSettings.rotor1Init,
        rotor2Init: rotorSettings.rotor2Init,
        rotor3Init: rotorSettings.rotor3Init,
      })
    );
    setModal(false);
  };

  return (
    <div
      className="rotorSettings"
      style={{ display: modal ? "block" : "none" }}
    >
      <table border="1" cellPadding="4" cellSpacing="0" width="100%">
        <tbody>
          <tr>
            <td>
              Reflector:&nbsp;
              <select
                id="reflector"
                defaultValue={reflector}
                onChange={(e) => setReflector(e.target.value)}
              >
                <option value="REFLECTOR_B">UKW-B</option>
                <option value="REFLECTOR_C">UKW-C</option>
              </select>
            </td>
            <td>
              1<sup>st</sup> Rotor:
            </td>
            <td>
              2<sup>nd</sup> Rotor:
            </td>
            <td>
              3<sup>rd</sup> Rotor:
            </td>
          </tr>
          <tr>
            <td>Rotor</td>
            <td>
              <SelectFirstRotor />
            </td>
            <td>
              <SelectSecondRotor />
            </td>
            <td>
              <SelectThirdRotor />
            </td>
          </tr>
          <tr>
            <td>Initial Position</td>
            <td>
              <SelectFirstPosition />
            </td>
            <td>
              <SelectSecondPosition />
            </td>
            <td>
              <SelectThirdPosition />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleSubmit}>Apply Changes</button>
    </div>
  );
};

export default RotorSettings;
