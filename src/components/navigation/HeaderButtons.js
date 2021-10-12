import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utils/_auth-helpers";
import { authActions } from "../../store/store";

const useStyles = makeStyles((theme) => {
  return {
    headerOptions: {
      display: "flex",
      flex: 1,
      justifyContent: "flex-end",
      background: "transparent",
    },
    headerButton: {
      marginLeft: 20,
      marginRight: 20,
      color: "inherit",
      "&:hover": {
        transform: "scale(1.02) ",
        color: "#eef",
        cursor: "pointer",
      },
      textDecoration: "none",
    },
    active: {
      transform: "scale(1.02) ",
      color: "#eef",
      textDecoration: "underline",
    },
    logoutButton: {
      color: "white",
      background: theme.palette.primary.main,
      "&:hover": {
        transform: "scale(1.02) ",
        color: "#eef",
        cursor: "pointer",
      },
      padding: "none",
      border: "none",
      marginTop: -1,
    },
  };
});

const HeaderButtons = (props) => {
  const classes = useStyles();
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout();
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.headerOptions}>
      {props.menuItems.map((menuItem) => {
        const { menuTitle, pageURL } = menuItem;
        if (menuItem.needsAuth && !authReducer.authenticated) {
          return "";
        }
        return (
          <NavLink
            key={menuTitle}
            to={pageURL}
            activeClassName={classes.active}
            className={classes.headerButton}
          >
            <Typography variant="h6">{menuTitle}</Typography>
          </NavLink>
        );
      })}
      {authReducer.authenticated && (
        <button onClick={handleLogout} className={classes.logoutButton}>
          <Typography variant="h6">Logout</Typography>
        </button>
      )}
    </div>
  );
};

export default HeaderButtons;
