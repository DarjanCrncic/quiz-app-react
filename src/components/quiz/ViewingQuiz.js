import { Typography } from "@material-ui/core";
import { Button, Container, makeStyles } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import Question from "./Question";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 16,
    width: "90%",
    textAlign: "center",
    margin: "auto",
  },
  arrows: {
    fontWeight: 600,
    fontSize: "2.2rem",
    color: "white",
  },
  arrowButton: {
    margin: 10,
    padding: 0
  },
  questionTitle: {
    textAlign: "center",
    marginTop: 35,
  },
}));

const ViewingQuiz = (params) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const quiz = params.history.location.state;
  const classes = useStyles();

  const handleNextQuestion = () => {
    if (questionNumber < quiz.questions.length - 1) {
      setQuestionNumber((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (questionNumber > 0) {
      setQuestionNumber((prev) => prev - 1);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h3" component="h2" className={classes.questionTitle}>
        {"Question " + (questionNumber + 1)}
      </Typography>
      <Question question={quiz.questions[questionNumber]} viewing={true} />
      <Container className={classes.container}>
        <Button
          variant="contained"
          onClick={handlePrevQuestion}
          className={classes.arrowButton}
          color="primary"
          disabled={questionNumber === 0}
        >
          <ArrowLeft className={classes.arrows} />
        </Button>
        <Button
          variant="contained"
          onClick={handleNextQuestion}
          className={classes.arrowButton}
          color="primary"
          disabled={questionNumber === quiz.questions.length - 1}
        >
          <ArrowRight className={classes.arrows} />
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default ViewingQuiz;
