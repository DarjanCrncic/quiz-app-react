import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
require('dotenv').config();

export const checkLogin = createAsyncThunk("auth/checkLogin", async (data) => {
  console.log("checking logging in...");
  return axios.get(process.env.REACT_APP_API_URL + "/users/authenticated").then((response) => response.data);
});

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
    [checkLogin.pending]: (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    },
    [checkLogin.fulfilled]: (state, { payload }) => {
      state.principal = payload;
      state.status = "authenticated";
      state.authenticated = true;
      state.isLoading = false;
    },
    [checkLogin.rejected]: (state, action) => {
      state.principal = null;
      state.authenticated = false;
      state.isLoading = false;
      state.status = "failed";
    },
  },
});

export default authSlice;
