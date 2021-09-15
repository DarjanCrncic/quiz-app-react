import { Container, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { submitUserAnswers } from "../../store/quiz-slice";

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
  const quizReducer = useSelector((state) => state.quizReducer);

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
    dispatch(submitUserAnswers());
  };

  return (
    <Countdown
      date={quizReducer.timer}
      renderer={renderer}
      precision={2}
      onComplete={handleCountdownCompleted}
    ></Countdown>
  );
});

export default CustomCountdown;
