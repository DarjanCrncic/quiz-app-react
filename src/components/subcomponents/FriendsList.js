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
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../../store/friends-slice";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "3px solid",
    padding: "10px 20px 10px 20px",
    marginTop: 10,
    borderColor: theme.palette.primary.light,
  },
}));

const FriendsList = () => {
  const classes = useStyles();
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
        {friendsReducer.friends.map((friend) => {
          return (
            <Paper key={friend.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={friend.picture.data.url} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={friend.name} />
                <ListItemText
                  primary={"Average Score: " + friend.average_score}
                />
                <ListItemSecondaryAction>
                  <Tooltip title="See statistics">
                    <IconButton edge="end">
                      <Search />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            </Paper>
          );
        })}
      </List>
    </Container>
  );
};

export default FriendsList;
