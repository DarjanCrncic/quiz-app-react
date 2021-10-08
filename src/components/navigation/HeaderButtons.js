import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

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
      marginTop: -1

    },
  };
});

const HeaderButtons = (props) => {
  const classes = useStyles();
  const authReducer = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    window.FB.logout(function(response) {
    });
  }

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
        <form action={"/api/logout"}>
          <button type="submit" className={classes.logoutButton}>
            <Typography variant="h6">Logout</Typography>
          </button>
        </form>
      )}
      <button onClick={handleLogout}>Logof</button>
    </div>
  );
};

export default HeaderButtons;
