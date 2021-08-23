import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getQuiz } from "../../store/quiz-slice";
import UserQuizTable from "../quiz/UserQuizTable";

const useStyles = makeStyles((theme) => ({}));

const Quizzes = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Link to="/quizzes/playing" onClick={() => dispatch(getQuiz())}>
        <Typography variant="h6">Start New</Typography>
      </Link>
      <UserQuizTable />
    </Container>
  );
};

export default Quizzes;
