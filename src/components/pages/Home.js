import { makeStyles } from "@material-ui/core";
import { Button, Container, Typography } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import React from "react";
import HomePageIntro from "../various/HomePageIntro";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: "center",
    margin: 30,
    color: theme.palette.primary.dark,
  },
  loginButton: {
    padding: 10,
    backgroundColor: "#4267b2"
  },
  facebookIcon: {
    marginRight: 10,
    fontSize: "3.5rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HomePageIntro>Test Your Knowledge In The Ultimate Quiz Application!</HomePageIntro>
      <Container>
        <form
          action={
            "/api/oauth2/authorization/facebook"
          }
          className={classes.wrapper}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.loginButton}
          >
            <Facebook className={classes.facebookIcon} />
            <Typography variant="h4">Log In With Facebook</Typography>
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Home;
