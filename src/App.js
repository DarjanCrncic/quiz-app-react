import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/navigation/Header";
import Home from "./components/pages/Home";
import Quizzes from "./components/pages/Quizzes";
import PlayingQuiz from "./components/various/PlayingQuiz";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import ViewingQuiz from "./components/various/ViewingQuiz";
import "./body.css";
import Leaderboards from "./components/pages/Leaderboards";
import StatisticMain from "./components/pages/StatisticMain";
import StatisticFriend from "./components/pages/StatisticFriend";
import { checkLoginState } from "./utils/_auth-helpers";
import { apiAuthLogin } from "./store/auth-slice";
import { useEffect, useState } from "react";
import BasicModal from "./utils/BasicModal";

const theme = createTheme({
  overrides: {
    MuiCircularProgress: {
      root: {
        position: "absolute",
        left: "50%",
        top: "50%",
        //transform: "translate(-50%, -50%)",
        marginLeft: -40,
        marginTop: -40,
      },
    },
  },
  palette: {
    primary: {
      light: "#FFC069",
      main: "#A45D5D",
      dark: "#4A403A",
      contrastText: "#EFEFEF",
    },
  },
});

function App() {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);

  
  useEffect(() => {
    const successfulFacebookTokenRetrieval = (response) => {
      dispatch(apiAuthLogin(response));
    }
    if (window.FB !== undefined) {
      checkLoginState(successfulFacebookTokenRetrieval);  
    } else {
      setModalOpen(true);
    }
  }, [dispatch])
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <BasicModal handleClose = {handleClose} open = {modalOpen} />
        <Switch>
          <Route exact from="/">
            <Redirect to="/home" />
          </Route>
          <Route
            exact
            path="/home"
            render={(props) => <Home {...props} />}
          ></Route>
          {authReducer.authenticated || authReducer.isLoading ? (
            <div>
              <Route
                exact
                path="/quizzes"
                render={(props) => <Quizzes {...props} />}
              ></Route>
              <Route
                exact
                path="/quizzes/playing"
                render={(props) => <PlayingQuiz {...props} />}
              ></Route>
              <Route
                exact
                path="/quizzes/viewing"
                render={(props) => <ViewingQuiz {...props} />}
              ></Route>
              <Route
                exact
                path="/statistics"
                render={(props) => <StatisticMain {...props} />}
              ></Route>
              <Route
                exact
                path="/statistics/:id"
                render={(props) => <StatisticFriend {...props} />}
              ></Route>
              <Route
                exact
                path="/leaderboards"
                render={(props) => <Leaderboards {...props} />}
              ></Route>
            </div>
          ) : (
            <Redirect to="/" />
          )}
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
