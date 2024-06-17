import { createSlice } from "@reduxjs/toolkit";

const state = {
  theme: null,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: state,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
