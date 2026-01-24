import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    redirectTo: null,
  },
  reducers: {
    navigateTo: (state, action) => {
      state.redirectTo = action.payload;
    },
    clearNavigation: (state) => {
      state.redirectTo = null;
    },
  },
});

export const { navigateTo, clearNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;
