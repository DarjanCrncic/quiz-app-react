import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/navigation/Header";
import Home from "./components/pages/Home";
import QuizPage from "./components/pages/QuizPage";

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
          render={(props) => <QuizPage {...props} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
