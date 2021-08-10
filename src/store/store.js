import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import quizSlice from "./quiz-slice";

const store = configureStore({
  reducer: { quizReducer: quizSlice.reducer, authReducer: authSlice.reducer },
});

export const quizActions = quizSlice.actions;

export default store;
