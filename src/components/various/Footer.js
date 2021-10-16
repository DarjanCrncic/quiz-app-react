import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      bottom: 0,
      margin: "40px 0 10px 0",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <a
        href="https://www.iubenda.com/privacy-policy/76813943"
        class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
        title="Privacy Policy "
      >
        Privacy Policy
      </a>
    </div>
  );
};

export default Footer;
