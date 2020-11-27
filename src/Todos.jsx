import React from "react";
import Todo from "./Todo";
import Grid from "@material-ui/core/Grid";

const Todos = ({ todos, handleDeleteATodo }) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
      spacing={1}
    >
      {todos.map((todo, index) => (
        <Grid item key={`${todo} + ${index}`} xs={9}>
          <Todo
            key={`${todo} + ${index}`}
            todo={todo}
            itemNo={++index}
            handleDeleteATodo={handleDeleteATodo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Todos;
