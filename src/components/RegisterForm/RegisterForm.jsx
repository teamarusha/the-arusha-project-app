import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Grid, TextField, Button, Typography, Container, CssBaseline, Box, Divider}from '@material-ui/core';
import KOPIMobileLogo from '../GLOBALUI/KOPILOGO/KOPIMobileLogo';
import globalUseStyle from '../GLOBALUI/globalUseStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import { makeStyles } from '@material-ui/core/styles';



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
}));

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
  
  const classes = useStyles();
  const globalStyle = globalUseStyle();

  return (
    <ThemeProvider theme={createMuiTheme}>
 <div className={classes.header}>
        <Typography component="h2" variant="h1">
          The 
        </Typography>
        <br />
        <Typography component="h2" variant="h1">
           Arusha Project
        </Typography>
        </div>
        <Divider classes={{root: classes.divider}}/>
        <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
     <div className={classes.mobileIcon}>
      <KOPIMobileLogo/>
      </div>
        <Typography component="h1" variant="h4">
        Register
        </Typography>
        <form className={classes.form} onSubmit={registerUser}>
           <TextField
           variant="outlined"
           margin="normal"
           name="firstName"
           value={firstName}
           fullWidth
           required
           onChange={(event) => setFirstName(event.target.value)}
           label="First Name"
           type="text"
           autoFocus
           />

        <TextField
            variant="outlined"
            margin="normal"
            name="lastName"
            value={lastName}
            fullWidth
            required
            onChange={(event) => setLastName(event.target.value)}
            label="Last Name"
            type="text"
           /> 
               <TextField
             variant="outlined"
             margin="normal"
             name="regionID"
             value={regionID}
             fullWidth
             required
             onChange={(event) => setRegionID(event.target.value)}
             label="Region ID"
             type="number"
           /> 
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
          />
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
          <Box className={globalStyle.btnArea}>
            <Button
         type="submit"
         name="submit"
         value="Register"
         size="large"
         variant="contained"
         color="secondary"
         className={classes.submit}
       >
         Sign Up
       </Button>
       </Box>
        </form>
      </div>
    </Container>

    </ThemeProvider>
  );
}

export default RegisterForm;