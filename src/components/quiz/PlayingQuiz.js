import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Question from "../quiz/Question";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz, submitUserAnswers } from "../../store/quiz-slice";
import CustomCountdown from "../quiz/CustomCountdown";

const useStyles = makeStyles((theme) => ({}));

const PlayingQuiz = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const quizReducer = useSelector((state) => state.quizReducer);
  useEffect(() => {
    if (quizReducer.ongoing === false && quizReducer.status === "finished") {
      dispatch(submitUserAnswers());
    }
  }, [quizReducer.ongoing, dispatch, quizReducer.status]);
  return (
    <div>
      {quizReducer.ongoing && (
        <div>
          <CustomCountdown time={quizReducer.timeLeft} />
          <Question
            question={quizReducer.quiz.questions[quizReducer.currentQuestion]}
          ></Question>
        </div>
      )}
    </div>
  );
};

export default PlayingQuiz;
