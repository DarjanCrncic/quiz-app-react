import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getQuizzes } from "../../store/quiz-table-slice";
import { useDispatch, useSelector } from "react-redux";
import { quizTableActions } from "../../store/store";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const columns = [
  { field: "id", headerName: "ID", width: 100, filterable: false },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    editable: false,
    filterable: false,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    flex: 1,
    editable: false,
    filterable: false,
  },
  {
    field: "creation_time",
    headerName: "Played at",
    flex: 1,
    editable: false,
    filterable: false,
    valueFormatter: (params) => {
      const valueFormatted = new Date(params.value);
      return (
        days[valueFormatted.getDay()] +
        ", " +
        valueFormatted.getDate() +
        "." +
        valueFormatted.getMonth() +
        "." +
        valueFormatted.getFullYear() +
        ". " +
        valueFormatted.getHours() +
        ":" +
        valueFormatted.getMinutes()
      );
    },
  },
  {
    field: "result",
    headerName: "Your result",
    flex: 1,
    editable: false,
    filterable: false,
    valueFormatter: (params) => {
      const valueFormatted = Number(params.value * 100).toLocaleString();
      return `${valueFormatted} %`;
    },
  },
];

const UserQuizTable = () => {
  const dispatch = useDispatch();
  const quizTableReducer = useSelector((state) => state.quizTableReducer);

  useEffect(() => {
    dispatch(getQuizzes());
  }, [
    dispatch,
    quizTableReducer.page,
    quizTableReducer.perPage,
    quizTableReducer.sortModel,
  ]);

  const handlePageChange = (newPage) => {
    dispatch(quizTableActions.changePage(newPage));
  };

  const handlePageSizeChange = (newPageSize) => {
    dispatch(quizTableActions.changePageSize(newPageSize));
  };

  const handleSortModelChange = (sortModel) => {
    console.log(sortModel)
    dispatch(quizTableActions.changeFilterModel(sortModel));
  };

  return (
    <div style={{ height: 370, width: "100%" }}>
      <DataGrid
        rows={quizTableReducer.rows}
        columns={columns}
        rowCount={quizTableReducer.totalCount}
        rowsPerPageOptions={[5, 10, 25, 50]}
        pagination
        paginationMode="server"
        page={quizTableReducer.page}
        onPageChange={(newPage) => handlePageChange(newPage)}
        pageSize={quizTableReducer.perPage}
        onPageSizeChange={(newPageSize) => handlePageSizeChange(newPageSize)}
        sortingMode="server"
        sortModel={quizTableReducer.sortModel}
        onSortModelChange={handleSortModelChange}
      />
    </div>
  );
};

export default UserQuizTable;
