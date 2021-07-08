import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField, Button, Typography, Container, CssBaseline, Box } from '@material-ui/core';
import KOPIMobileLogo from '../GLOBALUI/KOPILOGO/KOPIMobileLogo';
import globalUseStyle from '../GLOBALUI/globalUseStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// change styling for MUI components with these classes
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  divider: {
    height: '2px',
    marginTop: '1rem',
    flexShrink: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  },
  mobileIcon: {
    margin: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 40,

  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  logo: {
    width: '100px',
    height: '100px'

  }
}));


function LoginForm() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const globalStyle = globalUseStyle();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });

      history.push('/home')

    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <ThemeProvider theme={createMuiTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.mobileIcon}>
            {/* kopi logo */}
            <KOPIMobileLogo className={classes.logo} />
          </div>
          <Typography component="h1" variant="h4">
            Log In
        </Typography>
          <form className={classes.form} onSubmit={login}>
            {/* username textfield */}
            <TextField
              variant="outlined"
              margin="normal"
              name="username"
              value={username}
              fullWidth
              required
              onChange={(event) => setUsername(event.target.value)}
              label="Username"
              type='text'
              autoFocus
            />
            {/* password textfield */}
            <TextField
              variant="outlined"
              margin="normal"
              name="password"
              value={password}
              fullWidth
              required
              onChange={(event) => setPassword(event.target.value)}
              label="Password"
              type="password"
            />
            {/* login button */}
            <Box className={globalStyle.btnArea}>
              <Button
                type="submit"
                name="submit"
                size="large"
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;