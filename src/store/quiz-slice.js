import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuiz = createAsyncThunk("quiz/getQuiz", async () => {
  console.log("getting new quiz...");
  return axios.get("/quiz/").then((response) => response.data);
});

export const submitUserAnswers = createAsyncThunk("quiz/submitUserAnswers",
  async (data, {getState, dispatch}) => {
    return axios.post("/quiz/", getState().quizReducer.quiz).then((response) => response.status);
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: null,
    status: null,
    currentQuestion: 0,
    ongoing: false,
    timer: 0
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
      state.timer = Date.now() + 60000;
    },
    [getQuiz.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default quizSlice;
