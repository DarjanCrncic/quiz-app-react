import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getQuizzes } from "../../store/quiz-table-slice";
import { useDispatch, useSelector } from "react-redux";

const getQuizResult = (params) => {
    const questions = params.row.questions;
    let correct = 0;
    questions.forEach(question => {
        if (question.user_answer === question.correct_answer_id) {
            correct++;
        } 
    });
    console.log(params)
    return correct + "/" + questions.length;
}

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    editable: false,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    flex: 1,
    editable: false,
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
    editable: false,
  },
  {
    field: "score",
    headerName: "Your result",
    flex: 1,
    editable: false,
    valueGetter: getQuizResult
  },
];



const UserQuizTable = () => {
  const dispatch = useDispatch();
  const quizzesTableReducer = useSelector((state) => state.quizzesTableReducer);

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={quizzesTableReducer.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </div>
  );
};

export default UserQuizTable;
