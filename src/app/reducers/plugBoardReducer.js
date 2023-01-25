import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Q: "",
  W: "",
  E: "",
  R: "",
  T: "",
  Z: "",
  U: "",
  I: "",
  O: "",
  A: "",
  S: "",
  D: "",
  F: "",
  G: "",
  H: "",
  J: "",
  K: "",
  P: "",
  Y: "",
  X: "",
  C: "",
  V: "",
  B: "",
  N: "",
  M: "",
  L: "",
};

export const plugBoardSlice = createSlice({
  name: "plugBoard",
  initialState,
  reducers: {
    getPluggedKey(state, action) {
      console.log(action.payload);
    },
    setPluggedKey(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { getPluggedKey, setPluggedKey } = plugBoardSlice.actions;
export default plugBoardSlice.reducer;
