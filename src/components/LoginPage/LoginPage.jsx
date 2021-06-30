import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import { Grid, ThemeProvider, Link, Typography, Container } from "@material-ui/core";
import createMuiTheme from "../GLOBALUI/Theme";

function LoginPage() {
  const history = useHistory();

  return (
    <ThemeProvider theme={createMuiTheme}>
      <Container style={{ marginBottom: '25%'}}>
      <LoginForm />
      <Grid container justify="center">
        <Typography variant="body1" component="h4">
          New User?
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Link
          variant="body1"
          component="button"
          onClick={() => {
            history.push("/registration");
          }}
          color="secondary"
        >
          Register
        </Link>
      </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
