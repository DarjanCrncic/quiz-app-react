import { Grid, Grow, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { pieColors } from "../../utils/pie-colors";

const useStyles = makeStyles({
  bar: {
    backgroundColor: "red",
    height: 10,
  },
  root: {
    padding: 5,
    margin: "10px auto 10px auto",
  },
  textHolderLeft: {
    textAlign: "left",
  },
  textHolderRight: {
    textAlign: "right",
  },
  barHolder: {
    border: "1px solid",
    height: 10,
  },
});

const WinRateMeter = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grow timeout={250 * props.index} appear={true} in={true}>
        <Paper
          className={classes.root}
          style={{
            transform:
              props.selectedCategory === props.index
                ? "scale(1.05)"
                : "scale(1)",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={9} className={classes.textHolderLeft}>
              <Typography component="span">{props.data.label}</Typography>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.textHolderRight}>
              <Typography component="span">
                {Math.round(props.data.avg_score * 100) + "%"}
              </Typography>
            </Grid>
          </Grid>

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
      </Grow>
    </React.Fragment>
  );
};

export default WinRateMeter;
