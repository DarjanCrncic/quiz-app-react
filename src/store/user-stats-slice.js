import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStats = createAsyncThunk(
  "quiz/getStats",
  async (data, { getState }) => {
    console.log("getting stats...");
    const userId = getState().authReducer.principal.principal.id;
    return axios
      .get("/quiz/users/statistics/category/" + userId)
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
