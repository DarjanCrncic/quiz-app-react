import { Button } from "@material-ui/core";
import {
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getQuiz } from "../../store/quiz-slice";
import { categoryList } from "../../utils/category-list";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 30,
  },
  formControl: {
    minWidth: 200,
    margin: "auto",
    marginTop: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonLink: {
    marginTop: -5,
  },
}));

const QuizSelection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const quizReducer = useSelector((state) => state.quizReducer);

  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();
  const [questionNumber, setQuestionNumber] = useState();

  const handleStartQuizClick = () => {
    if (quizReducer.status !== "playing") {
      dispatch(getQuiz());
      history.push("/quizzes/playing");
    }
  };

  return (
    <div className={classes.root}>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        margin="dense"
      >
        <InputLabel htmlFor="outlined-difficulty-native-simple">
          Difficulty
        </InputLabel>
        <Select
          native
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          label="Difficulty"
          inputProps={{
            name: "difficulty",
            id: "outlined-difficulty-native-simple",
          }}
        >
          <option value={"any"}>Any</option>
          <option value={"easy"}>Easy</option>
          <option value={"medium"}>Medium</option>
          <option value={"hard"}>Hard</option>
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        margin="dense"
      >
        <InputLabel htmlFor="outlined-category-native-simple">
          Category
        </InputLabel>
        <Select
          native
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          label="Category"
          inputProps={{
            name: "category",
            id: "outlined-category-native-simple",
          }}
        >
          {categoryList.map((cat) => {
            return (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        margin="dense"
      >
        <InputLabel htmlFor="outlined-question-number-native-simple">
          Number of Questions
        </InputLabel>
        <Select
          native
          value={questionNumber}
          onChange={(event) => setQuestionNumber(event.target.value)}
          label="question-number"
          inputProps={{
            name: "question-number",
            id: "outlined-question-number-native-simple",
          }}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} margin="dense">
        <Button
          onClick={handleStartQuizClick}
          variant="contained"
          color="primary"
          className={classes.buttonLink}
          disabled={quizReducer.status === "playing" ? true : false}
        >
          <Typography variant="h6" component="div">
            Start New
          </Typography>
        </Button>
      </FormControl>
    </div>
  );
};

export default QuizSelection;
