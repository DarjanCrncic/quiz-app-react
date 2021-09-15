import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFriends = createAsyncThunk("user/getFriends", async (data) => {
  console.log("getting friends...");
  return axios.get("/users/friends").then((response) => response.data);
});

const friendsSlice = createSlice({
  name: "auth",
  initialState: { friends: [], status: null },
  reducers: {},
  extraReducers: {
    [getFriends.pending]: (state, action) => {
      state.status = "loading";
    },
    [getFriends.fulfilled]: (state, { payload }) => {
        console.log(payload.data)
      state.friends = payload.data;
      state.status = "success";
    },
    [getFriends.rejected]: (state, action) => {
      state.friends = [];
      state.status = "failed";
    },
  },
});

export default friendsSlice;
