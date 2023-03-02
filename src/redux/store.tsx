import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./reducer";

export const makeStore = () => configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production"
});

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore["getState"]>;
export const wrapper = createWrapper<RootStore>(makeStore);

