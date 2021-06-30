import React from 'react';
import { useDispatch } from 'react-redux';
import {Button, Box}from '@material-ui/core';
import globalUseStyle from '../GLOBALUI/globalUseStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '../GLOBALUI/Theme';

function LogOutButton(props) {
  const globalStyle = globalUseStyle();
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={createMuiTheme}>
      <Box className={globalStyle.btnArea}>
    <Button
      onClick={() => dispatch({ type: 'LOGOUT' })}
      type="submit"
      name="submit"
      value="Register"
      size="large"
      variant="contained"
      color="secondary"
      className={globalStyle.submit}
    >
      Log Out
    </Button>
    </Box>
    </ThemeProvider>
  );
}

export default LogOutButton;
