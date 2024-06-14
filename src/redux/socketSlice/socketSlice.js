import { createSlice } from "@reduxjs/toolkit";

const state = null;

const socketSlice = createSlice({
  name: "socket",
  initialState: state,
  reducers: {
    setSocket: (state, action) => {
      state = action.payload;
    },
  },
});

export default socketSlice.reducer;
export const { setSocket } = socketSlice.actions;
