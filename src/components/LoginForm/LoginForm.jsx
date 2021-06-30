import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import {Grid, TextField, Button, Typography, Container, CssBaseline, Divider, Box}from '@material-ui/core';
import KOPIMobileLogo from '../GLOBALUI/KOPILOGO/KOPIMobileLogo';
import globalUseStyle from '../GLOBALUI/globalUseStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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


function LoginForm() {
  const classes = useStyles();
  const errors = useSelector(store => store.errors);
  const user = useSelector((store) => store.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      <div className={classes.header}>
        <Typography component="h1" variant="h1">
          The 
        </Typography>
        <br />
        <Typography component="h1" variant="h1">
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
          Log in
        </Typography>
        <form className={classes.form} onSubmit={login}>
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




{/* <Container component="main" >
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
    
    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}/>
    
    <Grid item xs={12}/>

    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}/>
    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} alignContent='center'>
      <Typography variant='h4'>Login</Typography>
      </Grid>
    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}/>
        </Grid>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
 <Grid item xs={12} >
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
  //     </Grid>
  //     <Box className={globalStyle.btnArea}>
  // <Button
  //       type="submit"
  //       name="submit"
  //       value="Register"
  //       size="large"
  //       variant="contained"
  //       color="secondary"
  //       className={globalStyle.submit}
  //     >
  //       Sign In
  //     </Button>
  //     </Box>
  //   </form>
    
    // </Container> */}




    // const useStyles = makeStyles((theme) => ({
    //   paper: {
    //     marginTop: theme.spacing(8),
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   },
    //   header: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   },
    //   divider: {
    //     height: '2px',
    //     marginTop: '1rem',
    //     flexShrink: 0,
    //     backgroundColor: 'rgba(0, 0, 0, 1)'
    //   },
    //   mobileIcon: {
    //     margin: theme.spacing(1),
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
        
    //   },
    //   form: {
    //     width: '100%',
    //     marginTop: theme.spacing(1),
    //   },
    //   submit: {
    //     margin: theme.spacing(3, 0, 2),
    //   },
    // }));
    
    
    // function LoginForm() {
    //   const classes = useStyles();
    //   const errors = useSelector(store => store.errors);
    //   const user = useSelector((store) => store.user);
    //   const [username, setUsername] = useState('');
    //   const [password, setPassword] = useState('');
    //   const dispatch = useDispatch();
    //   const globalStyle = globalUseStyle();
    
    //   const login = (event) => {
    //     event.preventDefault();
    
    //     if (username && password) {
    //       dispatch({
    //         type: 'LOGIN',
    //         payload: {
    //           username: username,
    //           password: password,
    //         },
    //       });
    //     } else {
    //       dispatch({ type: 'LOGIN_INPUT_ERROR' });
    //     }
    //   }; // end login
    
    //   return (
    //     <ThemeProvider theme={createMuiTheme}>
    //       <div className={classes.header}>
    //         <Typography component="h1" variant="h1">
    //           The 
    //         </Typography>
    //         <br />
    //         <Typography component="h1" variant="h1">
    //            Arusha Project
    //         </Typography>
    //         </div>
    //         <Divider classes={{root: classes.divider}}/>
    //         <Container component="main" maxWidth="xs" >
    //       <CssBaseline />
    //       <div className={classes.paper}>
    //      <div className={classes.mobileIcon}>
    //       <KOPIMobileLogo/>
    //       </div>
    //         <Typography component="h1" variant="h4">
    //           Log in
    //         </Typography>
    //         <form className={classes.form} onSubmit={login}>
    //           <TextField
    //             variant="outlined"
    //             margin="normal"
    //             name="username"
    //             value={username}
    //             fullWidth
    //             required
    //             onChange={(event) => setUsername(event.target.value)}
    //             label="Username"
    //             type='text'
    //             autoFocus
    //           />
    //           <TextField
    //             variant="outlined"
    //             margin="normal"
    //             name="password"
    //             value={password}
    //             fullWidth
    //             required
    //             onChange={(event) => setPassword(event.target.value)}
    //             label="Password"
    //             type="password"   
    //           />
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             color="secondary"
    //             className={classes.submit}
    //           >
    //             Sign In
    //           </Button>
    //         </form>
    //       </div>
    //     </Container>
    //     </ThemeProvider>
    //   );