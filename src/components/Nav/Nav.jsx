import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KOPIMobileLogo from "../GLOBALUI/KOPILOGO/KOPIMobileLogo";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Button
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LogOutButton from '../LogOutButton/LogOutButton';

// OVERHEAD COMPONENT STYLING
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  nav: {
    width: "78%",
    backgroundColor: "#E8E7E7",
    boxShadow: "8px 8px 10px 3px rgba(0,0,0,0.56)",
  },
  item: {
    textAlign: "center",
    maxHeight: "inherit",
    marginTop:"8%",
    marginBottom:"8%",
  },
  ButtonItem: {
    textAlign: "center",
    marginTop:"0%",
    marginBottom:"0%",
    padding: 0
  },
  text: {
    fontFamily: "Red Hat Display",
    fontWeight: 400,
    fontSize: '4vh',
    margin:'auto',
    color: 'common'
  }, 
  buttonText: {
    fontFamily: "Red Hat Display",
    fontSize: '4vh',
    paddingBottom: 0,
    paddingTop: 0,
    color: 'common',
    textAlign:'center'
  }, 
  root : {
    backgroundColor: '#5BC6CC'
  },
  list: {
    margin: 0,
    height: '100%'
  },
  button : {
    width: '100%',
    height: '12vh',
    padding: 0,
    borderRadius: 0,
    fontSize: '3.2vh',
    marginTop: '3%',
  }
}));

// NAV DRAWER PROP.

function Drawer(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/')
  }
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const user = useSelector((store) => store.user);

  const {id} = useParams();

  let nonAdminLoginLinkData = {
    path: '/home',
    text: 'Login / Register',
  };

  let adminLoginLinkData = {
    path: "/login",
    text: "Login / Register",
  };

  if (user.id != null && user.is_admin === false) {
    nonAdminLoginLinkData.path = '/home';
    nonAdminLoginLinkData.text = 'Home';
  } 
  else if (user.id !=null && user.is_admin === true){
    adminLoginLinkData.path = '/admin'
    adminLoginLinkData.text = 'Home'

  }

  return (
    <React.Fragment>
      <SwipeableDrawer
        classes={{ paper: classes.nav }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List classes={{root: classes.list}}>

          {/* INCIDENT */}
          <ListItem
            component={Link}
            to={`/incident/${id}`}
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              Incident{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" style={{ color: "#5BC6CC" }} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider classes={{ root: classes.root }} />

          {/* PATIENT */}
          <ListItem component={Link} to={`/patient/${id}`} classes={{ root: classes.item }}>
            <ListItemText classes={{ primary: classes.text }}> Patients </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize='large' style={{ color: '#5BC6CC' }} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider classes={{ root: classes.root }} />

          {/* TREATMENT */}
          <ListItem component={Link} to={`/treatment/${id}`} classes={{ root: classes.item }}>
            <ListItemText classes={{ primary: classes.text }}> Treatment </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" style={{ color: "#5BC6CC" }} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider classes={{ root: classes.root }} />

          <ListItem
            component={Link}
            to={`/vitals/${id}`}
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              Vitals{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" style={{ color: "#5BC6CC" }} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider classes={{ root: classes.root }} />

          {/* Summary */}
          <ListItem
            component={Link}
            to={`/summary/${id}`}
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              Summary
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" style={{ color: "#5BC6CC" }} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider classes={{ root: classes.root }} />

          {/* LOGOUT BUTTON */}
          <ListItem
            component={Link}
            to={nonAdminLoginLinkData.path}
            classes={{ root: classes.buttonItem }}
            disableGutters={false}
          >
            
            <Button
            classes={{root: classes.button}}
            onClick={handleClick}
            type="submit"
            name="submit"
            value="Register"
            variant="contained"
            color="secondary"
            
          >
            Log Out
          </Button>
            

          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon style={{ fontSize: 60, color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
}

// NAV HEADER SCROLL PROP.

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 6 : 0,
  });
}

// NAV HEADER COMPONENT

export default function Nav(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={false}>
            <Drawer />
            <KOPIMobileLogo />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}




