import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import quizSlice from "./quiz-slice";
import quizTableSlice from "./quiz-table-slice";

const store = configureStore({
  reducer: {
    quizReducer: quizSlice.reducer,
    authReducer: authSlice.reducer,
    quizzesTableReducer: quizTableSlice.reducer,
  },
});

export const quizActions = quizSlice.actions;

export default store;
