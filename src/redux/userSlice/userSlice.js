import { createSlice } from "@reduxjs/toolkit";

const state = {
  userInfo: {},
  dialogs: [],
  messages: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: state,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setDialogs: (state, action) => {
      state.dialogs = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserInfo, setMessages } = userSlice.actions;
