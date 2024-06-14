import { createSlice } from "@reduxjs/toolkit";

const state = [{}];

const messagesSlice = createSlice({
  name: "themeSlice",
  initialState: state,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default messagesSlice.reducer;
export const { setMessage } = messagesSlice.actions;
