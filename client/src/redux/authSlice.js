import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isAdmin: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
