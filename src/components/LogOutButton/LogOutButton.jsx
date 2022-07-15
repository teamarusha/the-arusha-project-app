import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// styling
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import createTheme from '../GLOBALUI/Theme';


function LogOutButton(props) {
  //declare variables for use of functions
  const history = useHistory();
  const dispatch = useDispatch();

  //initializes logout actions
  const handleClick = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/')
  }
  return (
    <ThemeProvider theme={createTheme}>
      {/* logout button */}
      <Button
        onClick={handleClick}
        type="submit"
        name="submit"
        value="Register"
        size="medium"
        variant="contained"
        color="secondary"
      >
        Log Out
    </Button>
    </ThemeProvider>
  );
}

export default LogOutButton;
