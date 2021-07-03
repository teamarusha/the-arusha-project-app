import React from 'react';
import { useDispatch } from 'react-redux';
import {Button, Box}from '@material-ui/core';
import globalUseStyle from '../GLOBALUI/globalUseStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import { useHistory } from 'react-router-dom';

function LogOutButton(props) {
const history = useHistory();
  const dispatch = useDispatch();

const handleClick = () => {
  dispatch({ type: 'LOGOUT' })
  history.push('/')
}
  return (
    <ThemeProvider theme={createMuiTheme}>
      
    <Button
      onClick={handleClick}
      type="submit"
      name="submit"
      value="Register"
      size="large"
      variant="contained"
      color="secondary"
    >
      Log Out
    </Button>
    </ThemeProvider>
  );
}

export default LogOutButton;
