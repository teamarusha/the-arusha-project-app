import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import { Grid, ThemeProvider, Link, Typography, Container } from "@material-ui/core";
import createTheme from "../GLOBALUI/Theme";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  register: {
    marginBottom: 60,
  }
}));

function LoginPage() {
  // declare variables for use of functions
  const history = useHistory();
  const classes = useStyles();
  return (
    <ThemeProvider theme={createTheme}>
      <Container style={{ marginBottom: '25%' }}>
        {/* login form from loginform component */}
        <LoginForm />
        <Grid container justifyContent="center">
          <Typography variant="body1" component="h4">
            New User?
        </Typography>
        </Grid>
        <Grid container justifyContent="center">
          {/* registration link which redirects to registration page upon click */}
          <Link
            variant="body1"
            component="button"
            onClick={() => {
              history.push("/registration");
            }}
            color="secondary"
            className={classes.register}>
            Register
        </Link>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
