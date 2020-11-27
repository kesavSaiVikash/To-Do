import React, { useState } from "react";
import "./App.css";
import Todos from "./Todos";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  containerStyle: {},
  button: {
    margin: theme.spacing(1),
  },
  h1Style: {
    marginTop: "10px",
    marginBottom: "10px",
    color: "black",
  },
  formStyle: {
    backgroundColor: "rgba(247, 241, 243,1.0)",
    marginBottom: "10px",
    borderRadius: "20px",
  },
  inputStyle: {
    borderRadius: "20px",
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addATodo = (e) => {
    e.preventDefault();
    setTodos([inputText, ...todos]);
    setInputText("");
  };

  const handleDeleteATodo = (todo) => {
    const currentTodos = todos.filter((todoItem) => todoItem !== todo);
    setTodos(currentTodos);
  };

  return (
    <Container className={classes.containerStyle}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <h1 className={classes.h1Style}>ToDo App</h1>
        </Grid>
        <Grid item className={classes.formStyle}>
          <form onSubmit={addATodo} autoComplete="off">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <TextField
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className={classes.inputStyle}
                  id="outlined-basic"
                  label="Enter Task"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Button
                  disabled={!inputText}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<AddCircleOutlineIcon />}
                >
                  Add Todo
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Todos todos={todos} handleDeleteATodo={handleDeleteATodo} />
      </Grid>
    </Container>
  );
}

export default App;
