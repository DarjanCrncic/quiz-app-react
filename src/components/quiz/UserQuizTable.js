import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getQuizzes } from "../../store/quiz-table-slice";
import { useDispatch, useSelector } from "react-redux";
import { quizTableActions } from "../../store/store";


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
    field: "type",
    headerName: "Type",
    flex: 1,
    editable: false,
    filterable: false,
  },
  {
    field: "result",
    headerName: "Your result",
    flex: 1,
    editable: false,
    filterable: false,
  },
];

const UserQuizTable = () => {
  const dispatch = useDispatch();
  const quizTableReducer = useSelector((state) => state.quizTableReducer);

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch, quizTableReducer.page, quizTableReducer.perPage, quizTableReducer.sortModel]);

  const handlePageChange = (newPage) => {
    dispatch(quizTableActions.changePage(newPage));
  };

  const handlePageSizeChange = (newPageSize) => {
    dispatch(quizTableActions.changePageSize(newPageSize));
  };

  const handleSortModelChange = (sortModel) => {
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
