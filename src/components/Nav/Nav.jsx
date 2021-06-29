import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KOPIMobileLogo from "../KOPILOGO/KOPIMobileLogo";
import { makeStyles } from "@material-ui/styles";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  nav: {
    width: "78%",
    backgroundColor: "#8DD8DE",
    boxShadow: "8px 8px 10px 3px rgba(0,0,0,0.56)",
  },
  item: {
    textAlign: "center",
    maxHeight: "inherit",
  },
  text: {
    fontFamily: "Red Hat Display",
    fontWeight: 400,
    fontSize: "1.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    color: "common",
  },
}));

function Drawer(props) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };

  if (user.id != null) {
    loginLinkData.path = "/user";
    loginLinkData.text = "Home";
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
        <List>
          <ListItem
            divider
            component={Link}
            to="/home"
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              Home{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" />
            </ListItemSecondaryAction>
          </ListItem>
          {/* <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">The Arusha Project</h2>
      </Link>
      <div> */}
          <ListItem
            divider
            component={Link}
            to={loginLinkData.path}
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              {loginLinkData.text}{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" />
            </ListItemSecondaryAction>
          </ListItem>
          {/* <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link> */}

          {user.id && (
            <React.Fragment>
              <ListItem
                divider
                component={Link}
                to="/info"
                classes={{ root: classes.item }}
              >
                <ListItemText classes={{ primary: classes.text }}>
                  {" "}
                  Info Page{" "}
                </ListItemText>
                <ListItemSecondaryAction edge="end">
                  <ChevronRightIcon fontSize="large" />
                </ListItemSecondaryAction>
              </ListItem>
              {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
              <LogOutButton className="navLink" />
            </React.Fragment>
          )}
          <ListItem
            divider
            component={Link}
            to="/about"
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              About{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem
            divider
            component={Link}
            to="/incident"
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              Incident Form{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" />
            </ListItemSecondaryAction>
          </ListItem>

          {/* <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to ="/patientHome">
          Patient Home
        </Link>
        <Link className="navLink" to="/dropdown">

        </Link> */}
          <ListItem
            divider
            component={Link}
            to="/patientHome"
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              Patient Home{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem
            divider
            component={Link}
            to="/treatment"
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              Treament Home{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem
            divider
            component={Link}
            to="/vitals"
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              Vitals{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem
            divider
            component={Link}
            to="/dropdown"
            classes={{ root: classes.item }}
          >
            <ListItemText classes={{ primary: classes.text }}>
              {" "}
              ReduxCookie{" "}
            </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" />
            </ListItemSecondaryAction>
          </ListItem>
          {/* <Link className="navLink" to="/dropdown">
          ReduxCookie
        </Link> */}
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon style={{ fontSize: 50, color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
}

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
