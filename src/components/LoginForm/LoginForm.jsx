import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import {Grid, TextField, Button, Typography, Container, CssBaseline, Box}from '@material-ui/core';
import KOPIMobileLogo from '../KOPILOGO/KOPIMobileLogo';
import globalUseStyle from '../GLOBALUI/globalUseStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '../GLOBALUI/Theme';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const globalStyle = globalUseStyle();
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
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <ThemeProvider theme={createMuiTheme}>
      <Container component="main" >
      <CssBaseline/>

    <form className="formPanel" onSubmit={login}>
    <Grid container spacing={2} justify='center' >
    <Grid container >
    
    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} alignContent='center' >
      <KOPIMobileLogo/> 
    </Grid>
    <br />
    <br />
    <br />
    
    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
    
    <Grid item xs={12}></Grid>

    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} alignContent='center'>
      <Typography variant='h4'>Login</Typography>
      </Grid>
    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
        </Grid>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
 <Grid item xs={12} >
  <br />
<TextField
        label="Username"
        type="text"
        name="username"
        value={username}
        fullWidth
        required
        onChange={(event) => setUsername(event.target.value)}
        variant="outlined"
        autoFocus
      /> 
</Grid>
<Grid item xs={12} >
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        fullWidth
        required
        onChange={(event) => setPassword(event.target.value)}
        variant="outlined"
      /> 
      </Grid>
      {/* <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div> */}
      </Grid>
      <Box className={globalStyle.btnArea}>
  <Button
        type="submit"
        name="submit"
        value="Register"
        size="large"
        variant="contained"
        color="secondary"
        className={globalStyle.submit}
      >
        Sign In
      </Button>
      </Box>
    </form>
    </Container>
    </ThemeProvider>
  );
}

export default LoginForm;