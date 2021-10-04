import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
require('dotenv').config();

export const getQuizzes = createAsyncThunk(
  "quiz/getQuizzes",
  async (data, { getState }) => {
    const per_page = getState().quizTableReducer.perPage;
    const page = getState().quizTableReducer.page;
    const order = getState().quizTableReducer.sortModel[0].field;
    const orderBy = getState().quizTableReducer.sortModel[0].sort;
    const userId = getState().authReducer.principal.principal.id;
    console.log("should get");
    return axios
      .get(
        process.env.REACT_APP_API_URL +
          "/quiz/users/" +
          userId +
          "?per_page=" +
          per_page +
          "&page=" +
          page +
          "&order=" +
          order +
          "&order_by=" +
          orderBy
      )
      .then((response) => response.data);
  }
);

const quizTableSlice = createSlice({
  name: "quizTable",
  initialState: {
    rows: [],
    totalCount: 0,
    status: null,
    page: 0,
    perPage: 5,
    sortModel: [{ field: "id", sort: "asc" }],
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    changePageSize(state, action) {
      state.perPage = action.payload;
    },
    changeFilterModel(state, action) {
      state.sortModel = action.payload;
    },
  },
  extraReducers: {
    [getQuizzes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getQuizzes.fulfilled]: (state, { payload }) => {
      state.rows = payload.rows;
      state.totalCount = payload.total;
      state.status = "success";
    },
    [getQuizzes.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default quizTableSlice;
