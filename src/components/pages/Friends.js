import {
  Avatar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../../store/friends-slice";

const Friends = () => {
  const friendsReducer = useSelector((state) => state.friendsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
  }, []);

  return (
    <Container>
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
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    dadsa
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Paper>
          );
        })}
      </List>
    </Container>
  );
};

export default Friends;
