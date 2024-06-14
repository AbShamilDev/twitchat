import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./userSlice/userSlice";
import themeSlice from "./themeSlice/themeSlice";
import socketSlice from "./socketSlice/socketSlice";

const rootReducer = combineReducers({
  userSlice: userSlice,
  themeSlice: themeSlice,
  socketSlice: socketSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
