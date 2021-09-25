import {
  Avatar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  makeStyles,
  Paper,
  Grow,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFriends } from "../../store/friends-slice";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 20px 10px 20px",
    marginTop: 5,
  },
  listItem: {
    marginBottom: 10,
  },
}));

const FriendsList = () => {
  const classes = useStyles();
  const history = useHistory();
  const friendsReducer = useSelector((state) => state.friendsReducer);
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authReducer.authenticated) {
      dispatch(getFriends());
    }
  }, [dispatch, authReducer.authenticated]);

  return (
    <Container className={classes.root}>
      <List>
        {friendsReducer.friends.map((friend, i) => {
          return (
            <Grow
              timeout={250 * (i + 1)}
              appear={true}
              in={true}
              key={friend.i}
              className={classes.listItem}
            >
              <Paper>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={friend.picture.data.url} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={friend.name} />
                  <ListItemText
                    primary={
                      "Average Score: " +
                      (friend.average_score * 100).toFixed(2) +
                      "%"
                    }
                  />
                  <ListItemSecondaryAction
                    onClick={() => history.push("/statistics/" + friend.db_id)}
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
          );
        })}
      </List>
    </Container>
  );
};

export default FriendsList;
