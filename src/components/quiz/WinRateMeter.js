import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { pieColors } from "./pieColors";

const useStyles = makeStyles({
  bar: {
    backgroundColor: "red",
    height: 10,
  },
  root: {
    padding: 5,
    margin: "5px auto 5px auto",
    textAlign: "left",
  },
  barHolder: {
    border: "1px solid",
    height: 10,
  },
});

const WinRateMeter = (props) => {
  const classes = useStyles();
  console.log(props.selectedCategory);
  return (
    <Paper
      className={classes.root}
      style={{
        transform: props.selectedCategory === props.index ? "scale(1.05)" : "scale(1)",
      }}
    >
      <Typography>{props.data.label}</Typography>
      <div className={classes.barHolder}>
        <div
          className={classes.bar}
          style={{
            width: props.data.avg_score * 100 + "%",
            backgroundColor: pieColors[props.index % pieColors.length],
          }}
        ></div>
      </div>
    </Paper>
  );
};

export default WinRateMeter;
