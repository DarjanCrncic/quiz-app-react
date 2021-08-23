import { Container, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Countdown from "react-countdown";
import { useDispatch } from "react-redux";
import { quizActions } from "../../store/store";

const useStyles = makeStyles((theme) => ({
  countdown: {
    fontSize: "3.5rem",
  },
  container: {
    textAlign: "center",
    padding: 20,
    marginTop: 20,
    width: "30%",
  },
}));

const CustomCountdown = React.memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Container className={classes.container}>
        <Paper
          children={
            <div className={classes.countdown}>
              {(minutes < 10 && "0") + minutes}:
              {(seconds < 10 && "0") + seconds}
            </div>
          }
        />
      </Container>
    );
  };

  const handleCountdownCompleted = () => {
    dispatch(quizActions.stopQuiz())
  }

  return (
    <Countdown
      date={Date.now() + 60000}
      renderer={renderer}
      precision={2}
      onComplete={handleCountdownCompleted}
    ></Countdown>
  );
});

export default CustomCountdown;
