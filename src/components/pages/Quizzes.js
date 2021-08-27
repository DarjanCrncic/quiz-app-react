import { Container } from "@material-ui/core";
import React from "react";
import UserQuizTable from "../quiz/UserQuizTable";
import QuizSelection from "../quiz/QuizSelection";

const Quizzes = () => {
  return (
    <Container>
      <QuizSelection />
      <UserQuizTable />
    </Container>
  );
};

export default Quizzes;
