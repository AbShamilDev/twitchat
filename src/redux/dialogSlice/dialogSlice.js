import { createSlice } from "@reduxjs/toolkit";

const state = {
  activeDialogId: 0,
  messages: [],
};

const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState: state,
  reducers: {
    setActiveDialogId: (state, action) => {
      state.activeDialogId = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export default dialogSlice.reducer;
export const { setActiveDialogId, setMessages } = dialogSlice.actions;
