import React, { useEffect } from "react";
import { DataGrid, GridOverlay } from "@material-ui/data-grid";
import { getQuizzes } from "../../store/quiz-table-slice";
import { useDispatch, useSelector } from "react-redux";
import { quizTableActions } from "../../store/store";
import { Button, LinearProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

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
        (valueFormatted.getMonth() + 1) +
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
  {
    field: "actions",
    headerName: "Actions",
    flex: 0.5,
    filterable: false,
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <Button variant="contained" color="primary">
          Click
        </Button>
      );
    },
  },
];

const UserQuizTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const quizTableReducer = useSelector((state) => state.quizTableReducer);
  const authReducer = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(getQuizzes());
  }, [
    dispatch,
    quizTableReducer.page,
    quizTableReducer.perPage,
    quizTableReducer.sortModel,
    authReducer.authenticated,
  ]);

  const handlePageChange = (newPage) => {
    dispatch(quizTableActions.changePage(newPage));
  };

  const handlePageSizeChange = (newPageSize) => {
    dispatch(quizTableActions.changePageSize(newPageSize));
  };

  const handleSortModelChange = (sortModel) => {
    console.log(sortModel);
    dispatch(quizTableActions.changeFilterModel(sortModel));
  };

  const currentlySelected = (params) => {
    const field = params.colDef.field;

    if (field === "actions") {
      history.push({ pathname: "/quizzes/viewing", state: params.row });
    }
  };

  return (
    <div style={{ height: 370, width: "100%", marginTop: 10 }}>
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
        onCellClick={currentlySelected}
        loading={quizTableReducer.status !== "success"}
        components={{
          LoadingOverlay: CustomLoadingOverlay,
        }}
      />
    </div>
  );
};

export default UserQuizTable;
