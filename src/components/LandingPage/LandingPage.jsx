import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Typography, Grid, Link } from '@material-ui/core';
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      

      
          <RegisterForm />

         
           
          <Grid container justify='center'>
            <Typography variant='body1' component='h4'>Already a Member?</Typography>
            </Grid>
     
      <Grid container justify='center'>
        <Link
          variant='body1'
          component="button"
          onClick={onLogin}
          color='secondary'
        >
          Register
        </Link>
     
        </Grid>
      
    </div>
  );
}

export default LandingPage;
