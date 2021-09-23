import {
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../store/user-stats-slice";
import AvgPerCatList from "../various/AvgPerCatList";
import PlayerStatsPieChart from "../various/PlayerStatsPieChart";

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


const Statistics = () => {
  const classes = useStyles();
  const authReducer = useSelector((state) => state.authReducer);
  const [category, setCategory] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authReducer.authenticated) {
      dispatch(getStats());
    }
  }, [dispatch, authReducer.authenticated]);

  const setClickedCategory = (selected) => {
    setCategory(selected);
  }

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" className={classes.title}>
          Most played category
        </Typography>
        <PlayerStatsPieChart setClickedCategory={setClickedCategory}/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" className={classes.title}>
          Average score per category
        </Typography>
        <AvgPerCatList selectedCategory={category}/> 
      </Grid>
    </Grid>
  );
};

export default Statistics;
