import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuizzes = createAsyncThunk(
  "quiz/getQuizzes",
  async (data, { getState }) => {
    const per_page = getState().quizzesTableReducer.perPage;
    const page = getState().quizzesTableReducer.page;
    console.log("should get")
    return axios
      .get("/quiz/users/1?per_page=" + per_page + "&page=" + page)
      .then((response) => response.data);
  }
);

const quizTableSlice = createSlice({
  name: "quizTable",
  initialState: {
    rows: [],
    status: null,
    page: 0,
    perPage: 5,
  },
  reducers: {
    submitAnswer(state, action) {
      
    },
  },
  extraReducers: {
    [getQuizzes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getQuizzes.fulfilled]: (state, { payload }) => {
      state.rows = payload;
      state.status = "success";
    },
    [getQuizzes.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default quizTableSlice;
