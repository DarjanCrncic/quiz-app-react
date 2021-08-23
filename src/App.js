import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/navigation/Header";
import Home from "./components/pages/Home";
import Quizzes from "./components/pages/Quizzes";
import PlayingQuiz from "./components/quiz/PlayingQuiz";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
