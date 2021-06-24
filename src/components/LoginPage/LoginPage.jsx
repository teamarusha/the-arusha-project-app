import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Grid, ThemeProvider, Link } from '@material-ui/core';
import createMuiTheme from '../GLOBALUI/Theme'


function LoginPage() {
  const history = useHistory();

  return (
    <ThemeProvider theme={createMuiTheme}>
      <LoginForm />
    <Grid container justify='center'>
     <Grid item>
      
        <Link
          variant='body1'
          component="button"
          onClick={() => {
            history.push('/registration');
          }}
          color='secondary'
        >
          Register
        </Link>
     
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}

export default LoginPage;
