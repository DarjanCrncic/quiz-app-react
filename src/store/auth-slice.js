import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { authenticated: false },
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});