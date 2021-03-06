import { Container, Typography, useTheme } from "@material-ui/core";
import React from "react";
import UserQuizTable from "../various/UserQuizTable";
import QuizSelection from "../various/QuizSelection";

const Quizzes = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography
        variant="h4"
        style={{
          color: theme.palette.primary.main,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Challenge Yourself And Start A New Quiz!
      </Typography>
      <QuizSelection />
      <Typography
        variant="h5"
        style={{
          color: theme.palette.primary.main,
          borderBottom: "3px solid " + theme.palette.primary.light,
        }}
      >
        Your Quizzes:
      </Typography>
      <UserQuizTable />
    </Container>
  );
};

export default Quizzes;
