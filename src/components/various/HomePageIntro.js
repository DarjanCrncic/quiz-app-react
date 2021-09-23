import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  introText: {
    textAlign: "center",
    margin: "100px 0px 100px 0px",
    backgroundColor: theme.palette.primary.light,
    fontWeight: 900,
    lineHeight: "3rem",
    transform: "scaleY(1.1)",
    color: theme.palette.primary.contrastText,
    borderTop: "10px solid " + theme.palette.primary.main,
    borderBottom: "10px solid " + theme.palette.primary.main,
    padding: 40,
    paddingBottom: 50
  },
  borderTop: {
    marginTop: "5%",
    backgroundColor: theme.palette.primary.main,
    height: 20,
  },
  borderBottom: {
    backgroundColor: theme.palette.primary.main,
    height: 5,
    marginBottom: 25
  },
}));

const HomePageIntro = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.introText}>
        {props.children}
      </Typography>
    </div>
  );
};

export default HomePageIntro;
