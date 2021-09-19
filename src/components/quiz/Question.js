import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../../store/store";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  container: {
    padding: 16,
    width: "90%",
    textAlign: "center",
    margin: "auto",
    minHeight: 300
  },
  answer: {
    padding: theme.spacing(2),
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
  correctAnswer: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "green",
    },
    color: theme.palette.primary.contrastText
  },
  incorrectAnswer: {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red",
    },
    color: theme.palette.primary.contrastText
  },
}));

function Question(props) {
  const classes = useStyles();
  const question = props.question;
  const viewing = props.viewing;

  const dispatch = useDispatch();
  const quizReducer = useSelector((state) => state.quizReducer);

  const handleAnswerClick = (answerId) => {
    if (!viewing) {
      dispatch(
        quizActions.submitAnswer({
          questionId: question.id,
          answerId: answerId,
        })
      );
    }
  };

  const getAnswerClass = (answerId) => {
    if (!viewing) {
      return classes.answer;
    }
    if (+question.correct_answer_id !== +question.user_answer && +question.user_answer === +answerId) {
      return classes.incorrectAnswer + " " + classes.answer;
    }

    if (+question.correct_answer_id  === +answerId) {
      return classes.correctAnswer + " " + classes.answer;
    }

    return classes.answer;
  }
  
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h5">{question.question}</Typography>
        </Paper>
      </Grid>
      {question.answers.map((answer) => {
        const answerClass = getAnswerClass(answer.id);
        return (
          <Grid item xs={12} sm={6} key={answer.id} >
            <Button
              variant="outlined"
              className={answerClass}
              onClick={() => handleAnswerClick(answer.id)}
            >
              <Typography variant="h5"> {answer.answer}</Typography>
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Question;
