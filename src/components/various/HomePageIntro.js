import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  introText: {
    textAlign: "left",
    backgroundColor: theme.palette.primary.light,
    fontWeight: 900,
    lineHeight: "5.5rem",
    color: "white",
    padding: "40px 0px 30px 100px",
    [theme.breakpoints.down('md')]: {
      textAlign: "center",
      padding: 20
    },
  },
  container: {
    margin: "100px 0px 100px 0px",
  },
  whiteDivHolder: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
  WhiteDiv: {
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "white",
    height: "3rem",
  },
  innerTriangle: {
    borderTopColor: theme.palette.primary.light,
    borderRightColor: "white",
    borderWidth: "3rem 2rem 0 0",
    borderStyle: "solid",
    position: "relative",
    width: 0,
    height: 0
  },
  divTop: {
    width: "calc(100% - 4rem)",
  },
  divMiddle: {
    width: "calc(100% - 2rem)",
  },
  divBottom: {
    width: "100%",
  },
}));

const HomePageIntro = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
          <Grid item sm={12} md={8}>
            <Typography variant="h3" className={classes.introText}>
              {props.children}
            </Typography>
          </Grid>
          <Grid item sm={0} md={4} className={classes.whiteDivHolder}>
            <div className={classes.divTop + " " + classes.WhiteDiv}><div className={classes.innerTriangle}></div></div>
            <div className={classes.divMiddle + " " + classes.WhiteDiv}><div className={classes.innerTriangle}></div></div>
            <div className={classes.divBottom + " " + classes.WhiteDiv}><div className={classes.innerTriangle}></div></div>
          </Grid>
      </Grid>
    </div>
  );
};

export default HomePageIntro;
