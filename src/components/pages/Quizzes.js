import { Container, Typography, useTheme } from "@material-ui/core";
import React from "react";
import UserQuizTable from "../quiz/UserQuizTable";
import QuizSelection from "../quiz/QuizSelection";

const Quizzes = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography variant="h4" style={{color: theme.palette.primary.dark, textAlign: "center", marginTop: 20}}>Challenge Yourself And Start A New Quiz!</Typography>
      <QuizSelection />
      <Typography variant="h5" style={{color: theme.palette.primary.dark}}>Your Quizzes:</Typography>
      <UserQuizTable />
    </Container>
  );
};

export default Quizzes;
