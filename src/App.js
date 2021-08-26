import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/navigation/Header";
import Home from "./components/pages/Home";
import Quizzes from "./components/pages/Quizzes";
import PlayingQuiz from "./components/quiz/PlayingQuiz";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiCircularProgress: {
      // Name of the rule
      root: {
        // Some CSS
        position: "absolute",
        left: "50%",
        top: "50%",
        //transform: "translate(-50%, -50%)",
        marginLeft: -40,
        marginTop: -40,
      },
    },
  },
});

function App() {
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
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
