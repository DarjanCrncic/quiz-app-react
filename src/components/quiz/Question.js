import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

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
  },
  answer: {
    padding: theme.spacing(2),
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
}));

function Question(props) {
  const classes = useStyles();
  const question = props.question;

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h5">{question.question}</Typography>
        </Paper>
      </Grid>
      {question.answers.map((answer) => {
        return (
          <Grid item xs={12} sm={6} key={answer.id}>
            <Button variant="outlined" className={classes.answer}>
              <Typography variant="h5"> {answer.answer}</Typography>
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Question;
