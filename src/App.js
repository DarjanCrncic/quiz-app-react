import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/navigation/Header";
import Home from "./components/pages/Home";
import Quizzes from "./components/pages/Quizzes";
import PlayingQuiz from "./components/quiz/PlayingQuiz";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkLogin } from "./store/auth-slice";
import Friends from "./components/pages/Friends";
import ViewingQuiz from "./components/quiz/ViewingQuiz";

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
      contrastText: "#EFEFEF"
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact from="/">
            <Redirect to="/home" />
          </Route>
          <Route
            exact
            path="/home"
            render={(props) => <Home {...props} />}
          ></Route>
          {(authReducer.authenticated || authReducer.isLoading) && (
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
                path="/friends"
                render={(props) => <Friends {...props} />}
              ></Route>
            </div>
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
