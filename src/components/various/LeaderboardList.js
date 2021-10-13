import {
  Avatar,
  Container,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Tooltip,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLeaderboard } from "../../store/user-leaderboard-slice";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 20px 10px 20px",
    marginTop: 5,
  },
  listItem: {
    marginBottom: 10,
  },
}));

const calculatePlacementColor = (index) => {
  if (index === 0) {
    return "5px solid #FFD700";
  } else if (index === 1) {
    return "5px solid #C0C0C0";
  } else if (index === 2) {
    return "5px solid #CD7F32";
  } else {
    return "";
  }
};

const LeaderboardList = () => {
  const classes = useStyles();
  const history = useHistory();
  const authReducer = useSelector((state) => state.authReducer);
  const userLeaderboardReducer = useSelector(
    (state) => state.userLeaderboardReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (authReducer.authenticated) {
      dispatch(getLeaderboard());
    }
  }, [dispatch, authReducer.authenticated]);

  return (
    <Container className={classes.root}>
      <List>
        {userLeaderboardReducer.data.map((user, i) => {
          return (
            <React.Fragment key={i}>
              <Grow
                timeout={250 * (i + 1)}
                appear={true}
                in={true}
                key={user.id}
                className={classes.listItem}
                style={{ border: calculatePlacementColor(i) }}
              >
                <Paper>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <img src={user.image_url} alt="" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.full_name} />
                    <ListItemText
                      primary={
                        "Average Score: " +
                        (user.avg_score * 100).toFixed(2) +
                        "%"
                      }
                    />
                    <ListItemSecondaryAction
                      onClick={() => history.push("/statistics/" + user.id)}
                    >
                      <Tooltip title="See statistics">
                        <IconButton edge="end">
                          <Search />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Paper>
              </Grow>
            </React.Fragment>
          );
        })}
      </List>
    </Container>
  );
};

export default LeaderboardList;
