import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import rotorReducer from "./reducers/rotorReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rotor: rotorReducer,
  },
});
