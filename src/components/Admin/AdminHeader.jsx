import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Container } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KOPIAdminLogo from "../GLOBALUI/KOPILOGO/KOPIAdminLogo";
import { makeStyles } from "@material-ui/styles";
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import LogOutButton from "../LogOutButton/LogOutButton";
import { ThemeProvider } from '@material-ui/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import globalUseStyle from "../GLOBALUI/globalUseStyles";


// ADMIN HEADER COMPONENT STYLING
// const useStyles= globalUseStyle();

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "6em",
  },
  adminButton: {
    marginLeft: 'auto',
    position: 'static'
  }
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
export default function AdminHeader(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={createMuiTheme}>
      <React.Fragment>
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Toolbar disableGutters={false}>
              <SubdirectoryArrowLeftIcon fontSize='large' />
              <KOPIAdminLogo />
              <LogOutButton className={classes.button} />
            </Toolbar>
            <Container style={{ textAlign: "center" }}>
              <Typography variant="h3">Reports</Typography>
            </Container>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </React.Fragment>
    </ThemeProvider>
  );
}
