import { ENTRY } from "../constants";

export class Enigma {
  constructor(leftRotor, middleRotor, rightRotor, reflector) {
    this.rightRotorEntry = ENTRY;
    this.rightRotor = rightRotor;

    this.middleRotorEntry = ENTRY;
    this.middleRotor = middleRotor;

    this.leftRotorEntry = ENTRY;
    this.leftRotor = leftRotor;

    this.reflectorEntry = ENTRY;
    this.reflector = reflector;
  }

  turnRightRotor() {
    const { entry, rotor } = this.turnRotor(
      this.rightRotorEntry,
      this.rightRotor.rotor
    );
    this.rightRotorEntry = entry;
    this.rightRotor.rotor = rotor;

    // console.log(this.rightRotorEntry, "THIS --- ENTRY");
    // console.log(this.rightRotor.rotor, "THIS --- ROTOR");

    if (
      this.rightRotorEntry[this.rightRotorEntry.length - 1] ===
      this.rightRotor.rotorTurn
    ) {
      this.turnMiddleRotor();
    }
  }
  turnMiddleRotor() {
    const { entry, rotor } = this.turnRotor(
      this.middleRotorEntry,
      this.middleRotor.rotor
    );
    this.middleRotorEntry = entry;
    this.middleRotor.rotor = rotor;

    if (
      this.middleRotorEntry[this.middleRotorEntry.length - 1] ===
      this.middleRotor.rotorTurn
    ) {
      this.turnLeftRotor();
    }
  }
  turnLeftRotor() {
    const { entry, rotor } = this.turnRotor(
      this.leftRotorEntry,
      this.leftRotor.rotor
    );
    this.leftRotorEntry = entry;
    this.leftRotor.rotor = rotor;
  }

  turnRotor(entry, rotor) {
    entry = entry.split("");
    entry.push(entry.shift());
    entry = entry.join("");

    rotor = rotor.split("");
    rotor.push(rotor.shift());
    rotor = rotor.join("");

    // console.log(entry, "ENTRY");
    // console.log(rotor, "ROTOR");
    return {
      entry,
      rotor,
    };
  }

  getDecryption(letter) {
    const entryIndex = this.getIndexOfLetter(letter, ENTRY);

    const w1Letter = this.getLetterByIndex(entryIndex, this.rightRotor.rotor);
    const w1Index = this.getIndexOfLetter(w1Letter, this.rightRotorEntry);

    const w2Letter = this.getLetterByIndex(w1Index, this.middleRotor.rotor);
    // const w2EntryLetter = this.getLetterByIndex(w1Index, this.middleRotorEntry);
    const w2Index = this.getIndexOfLetter(w2Letter, this.middleRotorEntry);

    const w3Letter = this.getLetterByIndex(w2Index, this.leftRotor.rotor);
    const w3Index = this.getIndexOfLetter(w3Letter, this.leftRotorEntry);

    const refLetter = this.getLetterByIndex(w3Index, this.reflector);
    const refIndex = this.getIndexOfLetter(refLetter, this.reflectorEntry);

    // const w3I = this.getIndexOfLetter(refLetter, this.leftRotor.rotor);
    const w3let = this.getLetterByIndex(refIndex, this.leftRotorEntry);
    const w3I = this.getIndexOfLetter(w3let, this.leftRotor.rotor);

    const w2let = this.getLetterByIndex(w3I, this.middleRotorEntry);
    const w2I = this.getIndexOfLetter(w2let, this.middleRotor.rotor);

    const w1let = this.getLetterByIndex(w2I, this.rightRotorEntry);
    const w1I = this.getIndexOfLetter(w1let, this.rightRotor.rotor);

    const entryLetter = this.getLetterByIndex(w1I, ENTRY);

    console.log(entryLetter);

    // const entrylet = this.getLetterByIndex(entryI, ENTRY);
  }

  getIndexOfLetter(letter, rotorEntry) {
    return rotorEntry.indexOf(letter);
  }

  getLetterByIndex(letterIndex, rotorEntry) {
    return rotorEntry[letterIndex];
  }
}
