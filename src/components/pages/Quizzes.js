import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Question from "../quiz/Question";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../store/quiz-slice";

const useStyles = makeStyles((theme) => ({}));

const Quizzes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);
  
  const quizReducer = useSelector((state) => state.quizReducer);
  console.log(quizReducer)
  return (
    <div>
      {quizReducer.status === "success" && <Question question={quizReducer.quiz.questions[quizReducer.currentQuestion]}></Question>}
    </div>
  );
};

export default Quizzes;
