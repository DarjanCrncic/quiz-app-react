import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  introText: {
    textAlign: "center",
    margin: "30px 0px 30px 0px",
    backgroundColor: "white",
    color: theme.palette.primary.dark,
    borderTop: "5px solid " + theme.palette.primary.dark,
    borderBottom: "10px solid " + theme.palette.primary.dark,
    padding: 20,
    paddingBottom: 30
  },
  borderTop: {
    marginTop: "5%",
    backgroundColor: theme.palette.primary.light,
    height: 20,
  },
  borderBottom: {
    backgroundColor: theme.palette.primary.light,
    height: 40,
  },
}));

const HomePageIntro = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.borderTop}></div>
      <Typography variant="h3" className={classes.introText}>
        {props.children}
      </Typography>
      <div className={classes.borderBottom}></div>
    </div>
  );
};

export default HomePageIntro;
