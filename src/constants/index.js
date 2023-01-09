export const KEYBOARD = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Z",
  "U",
  "I",
  "O",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "P",
  "Y",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "L",
];

export const ENTRY = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Rotors
export const R1 = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
export const R1_T = "Q"; // ROTOR 1 TURNOVER

export const R2 = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
export const R2_T = "E"; // ROTOR 2 TURNOVER

export const R3 = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
export const R3_T = "V"; // ROTOR 3 TURNOVER

export const R4 = "ESOVPZJAYQUIRHXLNFTGKDCMWB";
export const R4_T = "J"; // ROTOR 4 TURNOVER

export const R5 = "VZBRGITYUPSDNHLXAWMJQOFECK";
export const R5_T = "Z"; // ROTOR 5 TURNOVER

// Reflectors
export const REFLECTOR_B = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
export const REFLECTOR_C = "FVPJIAOYEDRZXWGCTKUQSBNMHL";

export const getRotor = {
  I: { rotor: R1, rotorTurn: R1_T },
  II: { rotor: R2, rotorTurn: R2_T },
  III: { rotor: R3, rotorTurn: R3_T },
  IV: { rotor: R4, rotorTurn: R4_T },
  V: { rotor: R5, rotorTurn: R5_T },
};
