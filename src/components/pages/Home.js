import { makeStyles } from "@material-ui/core";
import { Button, Container, Typography } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import React from "react";
import HomePageIntro from "../various/HomePageIntro";
import { facebookLogin } from "../../utils/_auth-helpers";
import { useDispatch, useSelector } from "react-redux";
import { apiAuthLogin } from "../../store/auth-slice";
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  loginButton: {
    padding: 10,
    backgroundColor: "#4267b2",
  },
  facebookIcon: {
    marginRight: 10,
    fontSize: "3.5rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);

  const handleOnFacebookButtonClick = () => {
    const successfulFacebookTokenRetrieval = (response) => {
      dispatch(apiAuthLogin(response));
    };
    facebookLogin(successfulFacebookTokenRetrieval);
  };

  return (
    <React.Fragment>
      <HomePageIntro>
        Test Your Knowledge In The Ultimate Quiz Application!
      </HomePageIntro>
      <Container style={{ textAlign: "center" }}>
        {!authReducer.authenticated ? (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.loginButton}
            onClick={handleOnFacebookButtonClick}
          >
            <Facebook className={classes.facebookIcon} />
            <Typography variant="h4">Log In With Facebook</Typography>
          </Button>
        ) : <Typography variant="h3" color="primary">Welcome!</Typography>}
      </Container>
    </React.Fragment>
  );
};

export default Home;
