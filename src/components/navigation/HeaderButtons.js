import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
}));

const HeaderButtons = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.headerOptions}>
      {props.menuItems.map((menuItem) => {
        const { menuTitle, pageURL } = menuItem;
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
    </div>
  );
};

export default HeaderButtons;
