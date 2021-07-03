import React from "react";
import useState from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Container } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KOPIAdminLogo from "../GLOBALUI/KOPILOGO/KOPIAdminLogo";
import { makeStyles } from "@material-ui/styles";
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import LogOutButton from "../LogOutButton/LogOutButton";
import {ThemeProvider} from '@material-ui/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import globalUseStyle from "../GLOBALUI/globalUseStyles";
import { useHistory } from "react-router";


// ADMIN HEADER COMPONENT STYLING
// const useStyles= globalUseStyle();

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "6em",
  },
  adminButton : {
    marginLeft: 'auto',
    position: 'static'
  },
  text: {
    color: 'white'
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
function AdminHeader(props) {
  const history = useHistory();
  const classes = useStyles();
  // const [toggleArrow, setToggleArrow] = useState(false)

  return (
    <React.Fragment>
    <ThemeProvider theme={createMuiTheme}>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={false}>
          {/* {toggleArrow ? <SubdirectoryArrowLeftIcon/>
         : !toggleArrow } */}
            <KOPIAdminLogo />
            <LogOutButton />
          </Toolbar>
          <Container style={{ textAlign: "center" }}>
            <Typography variant="h3" className={classes.text}>Reports</Typography>
          </Container>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </ThemeProvider>
    </React.Fragment>
  );
}

export default AdminHeader;
