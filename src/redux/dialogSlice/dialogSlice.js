import { createSlice } from "@reduxjs/toolkit";

const state = {
  activeDialogId: 0,
};

const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState: state,
  reducers: {
    setActiveDialogId: (state, action) => {
      state.activeDialogId = action.payload;
    },
  },
});

export default dialogSlice.reducer;
export const { setActiveDialogId } = dialogSlice.actions;
