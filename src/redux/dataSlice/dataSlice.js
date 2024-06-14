import { createSlice } from "@reduxjs/toolkit";

const state = {
  userInfo: {},
  usersList: [],
  messages: [],
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: state,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setUsersList: (state, action) => {
      state.usersList = action.payload;
    },
    setAllMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const { setUserInfo, setUsersList, setAllMessages } = dataSlice.actions;
