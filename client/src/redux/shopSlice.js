import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    currency: "₹",
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = shopSlice.actions;
export default shopSlice.reducer;
