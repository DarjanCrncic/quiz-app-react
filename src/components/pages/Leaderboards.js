import {
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import FriendsList from "../various/FriendsList";
import LeaderboardList from "../various/LeaderboardList";

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
  title: {
    color: theme.palette.primary.main,
    borderBottom: "3px solid " + theme.palette.primary.light
  }
}));

const Leaderboards = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" className={classes.title}>
          Your Friends:
        </Typography>
        <FriendsList />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" className={classes.title}>
          Leaderboard
        </Typography>
        <LeaderboardList />
      </Grid>
    </Grid>
  );
};

export default Leaderboards;
