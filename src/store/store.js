import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import friendsSlice from "./friends-slice";
import quizSlice from "./quiz-slice";
import quizTableSlice from "./quiz-table-slice";
import userLeaderboardSlice from "./user-leaderboard-slice";
import userStatsSlice from "./user-stats-slice";

const store = configureStore({
  reducer: {
    quizReducer: quizSlice.reducer,
    authReducer: authSlice.reducer,
    quizTableReducer: quizTableSlice.reducer,
    friendsReducer: friendsSlice.reducer,
    userStatsReducer: userStatsSlice.reducer,
    userLeaderboardReducer: userLeaderboardSlice.reducer,
  },
});

export const quizActions = quizSlice.actions;
export const quizTableActions = quizTableSlice.actions;

export default store;
