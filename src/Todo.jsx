import React from "react";
import "./Todo.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import green from "@material-ui/core/colors/green";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  h5: {},
});

const theme = createMuiTheme({
  palette: {
    secondary: green,
  },
});

const Todo = ({ todo, itemNo, handleDeleteATodo }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        wrap
      >
        <Grid item>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5">
                {itemNo}. {todo}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item>
          <CardActions>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={() => handleDeleteATodo(todo)}
              >
                Delete
              </Button>
            </ThemeProvider>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Todo;
