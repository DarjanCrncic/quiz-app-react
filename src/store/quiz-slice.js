import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuiz = createAsyncThunk("quiz/getQuiz", async () => {
    console.log("should dispatch")
  return axios.get("/quiz/").then(response => response.data);
});

const quizSlice = createSlice({
  name: "quiz",
  initialState: { quiz: null, status: null },
  extraReducers: {
    [getQuiz.pending]: (state, action) => {
      state.status = "loading";
    },
    [getQuiz.fulfilled]: (state, { payload }) => {
      state.quiz = payload;
      state.status = "success";
    },
    [getQuiz.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default quizSlice;