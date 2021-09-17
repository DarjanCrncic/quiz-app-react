import { CircularProgress, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Question from "../quiz/Question";
import { useDispatch, useSelector } from "react-redux";
import { submitUserAnswers } from "../../store/quiz-slice";
import CustomCountdown from "../quiz/CustomCountdown";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({

}));

const PlayingQuiz = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const quizReducer = useSelector((state) => state.quizReducer);
  useEffect(() => {
    if (quizReducer.ongoing === false && quizReducer.status === "finished") {
      dispatch(submitUserAnswers());
      history.goBack();
    }
  }, [quizReducer.ongoing, dispatch, quizReducer.status, history]);
  return (
    <div>
      {quizReducer.ongoing ? (
        <div>
          <CustomCountdown time={quizReducer.timeLeft} />
          <Question
            question={quizReducer.quiz.questions[quizReducer.currentQuestion]}
            viewing={false}
          ></Question>
        </div>
      ) : <CircularProgress size={80}/>}
    </div>
  );
};

export default PlayingQuiz;
