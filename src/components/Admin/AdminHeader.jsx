import React from "react";
// grabs logout button component for use in admin header
import LogOutButton from "../LogOutButton/LogOutButton";

//Material UI components for styling
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Grid } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KOPIAdminLogo from "../GLOBALUI/KOPILOGO/KOPIAdminLogo";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from '@material-ui/styles';
import createTheme from '../GLOBALUI/Theme';



// ADMIN HEADER COMPONENT STYLING

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "6em",
  },
  text: {
    color: 'white',
    marginRight: '5%'
  },
  appBar: {
    flexDirection: 'row',
    display: 'inline',
    width: '100%'
  },
  toolBar: {
    alignItems: 'center'
  },
  gi1: {
    textAlign: 'left'
  },
  gi2: {
    textAlign: 'center'
  },
  gi3: {
    marginLeft: 'auto',
    textAlign: 'end'
  },
  giContainer: {
    alignContent: 'center',
    display: 'contents',
    justifyContentContent: 'center'
  },
}));


// ADMIN HEADER SCROLL PROP.
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


// ADMIN HEADER COMPONENT
// NOTE: We did not add a button to return to the previous page, this can still 
// be achieved using the browser's back arrow.

function AdminHeader(props) {

  const classes = useStyles();


  return (
    <React.Fragment>
      <ThemeProvider theme={createTheme}>
        <ElevationScroll>
          <AppBar position="fixed" color="primary" classes={{ root: classes.appBar }}>
            <Toolbar disableGutters={false} classes={{ root: classes.toolBar }}>
              <Grid container direction="row" alignContent='center' classes={{ root: classes.giContainer }} xl>
                <Grid item xs={4} s={4} md={4} lg={4} xl={4} classes={{ root: classes.gi1 }}>
                  <KOPIAdminLogo />
                </Grid>
                <Grid item xs={4} s={4} md={4} lg={4} xl={4} classes={{ root: classes.gi2 }}>
                  <Typography variant="h3" className={classes.text}>Reports</Typography>
                </Grid>
                <Grid item xs={4} s={4} md={4} lg={4} xl={4} classes={{ root: classes.gi3 }}>
                  <LogOutButton />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </ThemeProvider>
    </React.Fragment>
  );
} //end Admin Header

export default AdminHeader;
