import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
require('dotenv').config();

export const getLeaderboard = createAsyncThunk(
  "quiz/getLeaderboard",
  async (data) => {
    console.log("getting leaderboard...");
    return axios
      .get("/api/quiz/users/statistics/leaderboard")
      .then((response) => response.data);
  }
);

const userLeaderboardSlice = createSlice({
  name: "userStats",
  initialState: { data: [], status: null},
  reducers: {},
  extraReducers: {
    [getLeaderboard.pending]: (state, action) => {
      state.status = "loading";
    },
    [getLeaderboard.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [getLeaderboard.rejected]: (state, action) => {
      state.data = [];
      state.status = "failed";
    },
  },
});

export default userLeaderboardSlice;
