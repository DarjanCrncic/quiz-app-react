import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
require('dotenv').config();

export const getQuiz = createAsyncThunk("quiz/getQuiz", async (data) => {
  console.log("getting new quiz...");
  return axios
    .get("/api/quiz/", {
      params: {
        category: data.category,
        difficulty: data.difficulty,
        amount: data.questionNumber,
      },
    })
    .then((response) => response.data);
});

export const submitUserAnswers = createAsyncThunk(
  "quiz/submitUserAnswers",
  async (data, { getState }) => {
    console.log("submitting answers...");
    return axios
      .post("/api/quiz/", getState().quizReducer.quiz)
      .then((response) => response.status);
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: null,
    status: null,
    currentQuestion: 0,
    ongoing: false,
    timer: 0,
  },
  reducers: {
    submitAnswer(state, action) {
      if (state.ongoing) {
        state.quiz.questions[state.currentQuestion].user_answer =
          action.payload.answerId;
        if (state.currentQuestion < state.quiz.questions.length - 1) {
          state.currentQuestion++;
        } else {
          state.ongoing = false;
          state.status = "finished";
          state.timer = 0;
        }
      }
    },
    startQuiz(state) {
      state.ongoing = true;
    },
    stopQuiz(state) {
      state.ongoing = false;
      state.status = "finished";
      state.timer = 0;
    },
  },
  extraReducers: {
    [getQuiz.pending]: (state, action) => {
      state.status = "loading";
    },
    [getQuiz.fulfilled]: (state, { payload }) => {
      state.quiz = payload;
      state.status = "playing";
      state.ongoing = true;
      state.currentQuestion = 0;
      state.timer = Date.now() + payload.questions.length * 30 * 1000;
    },
    [getQuiz.rejected]: (state, action) => {
      state.status = "failed";
    },
    [submitUserAnswers.fulfilled]: (state) => {
      state.ongoing = false;
      state.status = "finished";
      state.timer = 0;
    },
    [submitUserAnswers.rejected]: (state) => {
      state.ongoing = false;
      state.status = "finished";
      state.timer = 0;
    },
  },
});

export default quizSlice;
