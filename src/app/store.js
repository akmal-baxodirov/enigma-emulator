import { configureStore } from "@reduxjs/toolkit";
import plugBoardReducer from "./reducers/plugBoardReducer";
import rotorReducer from "./reducers/rotorReducer";

export const store = configureStore({
  reducer: {
    rotor: rotorReducer,
    plugBoard: plugBoardReducer,
  },
});
