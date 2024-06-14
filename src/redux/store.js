import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import dataSlice from "./dataSlice/dataSlice";
import themeSlice from "./themeSlice/themeSlice";
import websocketReducer from "./websocketSlice/websocketSlice";
import dialogSlice from "./dialogSlice/dialogSlice";
import websocketMiddleware from "./websocketSlice/websocketMiddleware";

const rootReducer = combineReducers({
  dataSlice: dataSlice,
  themeSlice: themeSlice,
  dialogSlice: dialogSlice,
  websocket: websocketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websocketMiddleware),
});
