import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { Typography, Grid, Link } from "@material-ui/core";
// CUSTOM COMPONENTS
import LoginForm from "../LoginForm/LoginForm";


function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/registration");
  };

  return (
    <React.Fragment>
      
      <div className="container">
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
            onClick={onLogin}
            color="secondary"
          >
            Register
          </Link>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
