import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiAuthLogin = createAsyncThunk(
  "auth/checkLogin",
  async (data) => {
    console.log("checking logging in...");
    console.log("facebook data: ", data);
    return axios
      .post("/api/login", data.authResponse)
      .then((response) => response.data);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    status: null,
    principal: null,
    isLoading: true,
  },
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
  extraReducers: {
    [apiAuthLogin.pending]: (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    },
    [apiAuthLogin.fulfilled]: (state, { payload }) => {
      state.principal = payload;
      if (payload !== null && payload !== "") {
        state.status = "authenticated";
        state.authenticated = true;
      }
      state.isLoading = false;
    },
    [apiAuthLogin.rejected]: (state, action) => {
      state.principal = null;
      state.authenticated = false;
      state.isLoading = false;
      state.status = "failed";
    },
  },
});

export default authSlice;
