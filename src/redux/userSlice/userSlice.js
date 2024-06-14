import { createSlice } from "@reduxjs/toolkit";

const state = {
  userInfo: {},
  dialogs: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: state,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setMessages: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserInfo, setMessages } = userSlice.actions;
