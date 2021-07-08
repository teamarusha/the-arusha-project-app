import {
  Grid,
  ThemeProvider,
  Link,
  Typography,
  Container
} from "@material-ui/core";
import React from "react";
import createMuiTheme from "../GLOBALUI/Theme";
import { useHistory } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";

function RegisterPage() {
  const history = useHistory();

  return (
    <ThemeProvider theme={createMuiTheme}>
      <Container >
      <RegisterForm />

      <Grid container justify="center">
        <Typography variant="body1" component="h4">
          Already a Member?
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Link
          variant="body1"
          component="button"
          onClick={() => {
            history.push("/login");
          }}
          color="secondary"
        >
          Login
        </Link>
      </Grid>
      <br />
      <br />
      </Container>
    </ThemeProvider>
  );
}

export default RegisterPage;
