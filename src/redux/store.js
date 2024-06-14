import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./userSlice/userSlice";
import themeSlice from "./themeSlice/themeSlice";

const rootReducer = combineReducers({
  userSlice: userSlice,
  themeSlice: themeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
