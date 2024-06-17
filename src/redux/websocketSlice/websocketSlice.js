import { createSlice } from "@reduxjs/toolkit";
import { setIsConnected, addSocketMessage } from "./websocketActions";

const websocketSlice = createSlice({
  name: "websocket",
  initialState: {
    isConnected: false,
    messages: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(setIsConnected, (state, action) => {
        state.isConnected = action.payload;
      })
      .addCase(addSocketMessage, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export default websocketSlice.reducer;
