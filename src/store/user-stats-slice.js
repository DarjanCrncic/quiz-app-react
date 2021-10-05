import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
require('dotenv').config();

export const getStats = createAsyncThunk(
  "quiz/getStats",
  async (data) => {
    console.log("getting stats...");
    const userId = data;
    return axios
      .get("/api/quiz/users/statistics/category/" + userId)
      .then((response) => response.data);
  }
);

const userStatsSlice = createSlice({
  name: "userStats",
  initialState: { data: [], status: null},
  reducers: {},
  extraReducers: {
    [getStats.pending]: (state, action) => {
      state.status = "loading";
    },
    [getStats.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [getStats.rejected]: (state, action) => {
      state.data = [];
      state.status = "failed";
    },
  },
});

export default userStatsSlice;
