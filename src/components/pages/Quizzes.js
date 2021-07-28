import { makeStyles } from "@material-ui/core";
import React from "react";
import Question from "../quiz/Question";

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
  return (
    <div>
      <Question question={questions[0]}></Question>
    </div>
  );
};

export default Quizzes;
