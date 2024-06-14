import { createSlice } from "@reduxjs/toolkit";

const state = {
  userInfo: {},
  usersList: [],
  messages: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: state,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setUsersList: (state, action) => {
      state.usersList = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserInfo, setUsersList, setMessages } = userSlice.actions;
