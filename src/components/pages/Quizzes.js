import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Question from "../quiz/Question";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../store/quiz-slice";

const useStyles = makeStyles((theme) => ({}));

const questions = [
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "Who wrote and directed the 1986 film &#039;Platoon&#039;?",
    correct_answer: "Oliver Stone",
    incorrect_answers: [
      "Francis Ford Coppola",
      "Stanley Kubrick",
      "Michael Cimino",
    ],
  },
  {
    category: "Vehicles",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which country has the international vehicle registration letter &#039;A&#039;?",
    correct_answer: "Austria",
    incorrect_answers: ["Afghanistan", "Australia", "Armenia"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the chemical makeup of water?",
    correct_answer: "H20",
    incorrect_answers: ["C12H6O2", "CO2", "H"],
  },
];

const Quizzes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);
  
  const quizReducer = useSelector((state) => state.quizReducer);
  console.log(quizReducer.quiz, quizReducer.status)
  return (
    <div>
      {quizReducer.status === "success" && <Question question={quizReducer.quiz.questions[0]}></Question>}
    </div>
  );
};

export default Quizzes;
