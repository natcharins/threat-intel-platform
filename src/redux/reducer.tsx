import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

export const rootReducer = combineReducers({
  counter: counterSlice,
});
