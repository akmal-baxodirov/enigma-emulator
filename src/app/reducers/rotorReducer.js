import { createSlice } from "@reduxjs/toolkit";
import { ENTRY, getReflector, getRotor } from "../../constants";

const initialState = {
  leftRotorEntry: ENTRY,
  leftRotor: getRotor.I,

  middleRotorEntry: ENTRY,
  middleRotor: getRotor.II,

  rightRotorEntry: ENTRY,
  rightRotor: getRotor.III,

  reflectorEntry: ENTRY,
  reflector: getReflector.REFLECTOR_B,

  text: "",
  encryptedText: "",
  letter: "",

  rotorSettings: {
    reflector: "REFLECTOR_B",
    rotor1: "I",
    rotor2: "II",
    rotor3: "III",
    rotor1Init: "A",
    rotor2Init: "A",
    rotor3Init: "A",
  },
};

const turnRotor = (entry, rotor) => {
  entry = entry.split("");
  entry.push(entry.shift());
  entry = entry.join("");

  rotor = rotor.split("");
  rotor.push(rotor.shift());
  rotor = rotor.join("");

  return {
    entry,
    rotor,
  };
};

const changePosition = (rotor, index) => {
  rotor = rotor.split("");
  rotor.push(...rotor.splice(0, index));
  return rotor.join("");
};

const getIndexOfLetter = (letter, rotorEntry) => {
  return rotorEntry.indexOf(letter);
};

const getLetterByIndex = (letterIndex, rotorEntry) => {
  return rotorEntry[letterIndex];
};

const handlePlugBoard = (key, plugBoard) => {
  return plugBoard[key] || key;
};
export const rotorSlice = createSlice({
  name: "rotor",
  initialState,
  reducers: {
    turnRightRotor(state, action) {
      const { entry, rotor } = turnRotor(
        state.rightRotorEntry,
        state.rightRotor.rotor
      );
      state.rightRotorEntry = entry;
      state.rightRotor.rotor = rotor;

      if (state.middleRotorEntry[0] === state.middleRotor.rotorTurn) {
        const { entry, rotor } = turnRotor(
          state.leftRotorEntry,
          state.leftRotor.rotor
        );
        state.leftRotorEntry = entry;
        state.leftRotor.rotor = rotor;

        const middle = turnRotor(
          state.middleRotorEntry,
          state.middleRotor.rotor
        );
        state.middleRotorEntry = middle.entry;
        state.middleRotor.rotor = middle.rotor;
      }

      if (
        state.rightRotorEntry[state.rightRotorEntry.length - 1] ===
        state.rightRotor.rotorTurn
      ) {
        const { entry, rotor } = turnRotor(
          state.middleRotorEntry,
          state.middleRotor.rotor
        );
        state.middleRotorEntry = entry;
        state.middleRotor.rotor = rotor;
      }
    },

    getDecryption(state, action) {
      const { currentKey, plugBoard } = action.payload;
      const entryIndex = getIndexOfLetter(
        handlePlugBoard(currentKey, plugBoard),
        ENTRY
      );

      const w1Letter = getLetterByIndex(entryIndex, state.rightRotor.rotor);
      const w1Index = getIndexOfLetter(w1Letter, state.rightRotorEntry);

      const w2Letter = getLetterByIndex(w1Index, state.middleRotor.rotor);
      const w2Index = getIndexOfLetter(w2Letter, state.middleRotorEntry);

      const w3Letter = getLetterByIndex(w2Index, state.leftRotor.rotor);
      const w3Index = getIndexOfLetter(w3Letter, state.leftRotorEntry);

      const refLetter = getLetterByIndex(w3Index, state.reflector);
      const refIndex = getIndexOfLetter(refLetter, state.reflectorEntry);

      const w3let = getLetterByIndex(refIndex, state.leftRotorEntry);
      const w3I = getIndexOfLetter(w3let, state.leftRotor.rotor);

      const w2let = getLetterByIndex(w3I, state.middleRotorEntry);
      const w2I = getIndexOfLetter(w2let, state.middleRotor.rotor);

      const w1let = getLetterByIndex(w2I, state.rightRotorEntry);
      const w1I = getIndexOfLetter(w1let, state.rightRotor.rotor);

      const entryLetter = getLetterByIndex(w1I, ENTRY);
      return {
        ...state,
        text: state.text + currentKey,
        encryptedText:
          state.encryptedText + handlePlugBoard(entryLetter, plugBoard),
        letter: handlePlugBoard(entryLetter, plugBoard),
      };
    },

    setRotorSettings(state, action) {
      const {
        reflector,
        rotor1,
        rotor2,
        rotor3,
        rotor1Init,
        rotor2Init,
        rotor3Init,
      } = action.payload;

      const rotor1Index = getIndexOfLetter(rotor1Init, ENTRY);
      const rotor2Index = getIndexOfLetter(rotor2Init, ENTRY);
      const rotor3Index = getIndexOfLetter(rotor3Init, ENTRY);

      return {
        leftRotorEntry: changePosition(ENTRY, rotor1Index),
        leftRotor: {
          ...getRotor[rotor1],
          rotor: changePosition(getRotor[rotor1].rotor, rotor1Index),
        },

        middleRotorEntry: changePosition(ENTRY, rotor2Index),
        middleRotor: {
          ...getRotor[rotor2],
          rotor: changePosition(getRotor[rotor2].rotor, rotor2Index),
        },

        rightRotorEntry: changePosition(ENTRY, rotor3Index),
        rightRotor: {
          ...getRotor[rotor3],
          rotor: changePosition(getRotor[rotor3].rotor, rotor3Index),
        },

        reflectorEntry: ENTRY,
        reflector: getReflector[reflector],

        text: "",
        encryptedText: "",

        rotorSettings: action.payload,
      };
    },
  },
});

export const { turnRightRotor, getDecryption, setRotorSettings } =
  rotorSlice.actions;
export default rotorSlice.reducer;
