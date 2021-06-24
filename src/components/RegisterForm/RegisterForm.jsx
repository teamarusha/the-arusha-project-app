import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Grid, TextField, Button, Typography, Container, CssBaseline, Box}from '@material-ui/core';
import KOPIMobileLogo from '../KOPILOGO/KOPIMobileLogo';
import globalUseStyle from '../GLOBALUI/globalUseStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '../GLOBALUI/Theme';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [regionID, setRegionID] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, regionID);
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        region_id: regionID
      },
    });
  }; // end registerUser

  const globalStyle = globalUseStyle();

  return (
    <ThemeProvider theme={createMuiTheme}>
    <Container component="main" >
    <CssBaseline/>
    
      {/* <Typography variant='h3' >The Arusha Project</Typography> */}
      
    <form className="formPanel" onSubmit={registerUser}>
      <Grid container spacing={2} justify='center' >

        <Grid container >
        {/* <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} alignContent='center'>
            <Typography variant='h3'>The Arusha Project</Typography>
        </Grid> */}
        
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} alignContent='center' >
             <KOPIMobileLogo/>  
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
        
        <Grid item xs={12}></Grid>

        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} alignContent='center'>
            <Typography variant='h4'>Register</Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
            </Grid>
      {errors.registrationMessage && (
        <Typography variant='h3' className="alert" role="alert">
          {errors.registrationMessage}
        </Typography>
      )}
      <Grid item xs={12} >
          <TextField
          label="First Name"
            type="text"
            name="firstName"
            value={firstName}
            fullWidth
            required
            onChange={(event) => setFirstName(event.target.value)}
            variant="outlined"
            autoFocus
          />
          </Grid>
          <Grid item xs={12} >
          <TextField
           label="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            fullWidth
            required
            onChange={(event) => setLastName(event.target.value)}
            variant="outlined"
          />
          </Grid>
      <Grid item xs={12}>
          <TextField
            label="Username"
            type="text"
            name="username"
            value={username}
            fullWidth
            required
            onChange={(event) => setUsername(event.target.value)}
            variant="outlined"
          /> 
        </Grid>
      <Grid item xs={12}>
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
        <Grid item xs={12}>
          <TextField
            label="Region ID"
            type="number"
            name="regionID"
            value={regionID}
            fullWidth
            required
            onChange={(event) => setRegionID(event.target.value)}
            variant="outlined"
          /> 
        </Grid>
        </Grid>
        <Box className={globalStyle.btnArea}>
      <Button
            type="submit"
            name="submit"
            value="Register"
            
            variant="contained"
            color="secondary"
            className={globalStyle.submit}
          >
            Sign Up
          </Button>
          </Box>
    </form>
    </Container>
    </ThemeProvider>
  );
}

export default RegisterForm;
