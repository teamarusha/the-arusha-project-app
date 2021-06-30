
import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KOPIMobileLogo from "../GLOBALUI/KOPILOGO/KOPIMobileLogo";
import { makeStyles } from "@material-ui/styles";

import { SwipeableDrawer, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
    width: '78%',
    backgroundColor: '#E8E7E7',
    boxShadow: '8px 8px 10px 3px rgba(0,0,0,0.56)',

  },
  item: {
    textAlign: "center",
    maxHeight: "inherit",
  },
  text: {
    fontFamily: "Red Hat Display",
    fontWeight: 400,

    fontSize: '1.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'common'
  },
  root : {
    backgroundColor: '#5BC6CC'
  }
}));


// NAV DRAWER PROP.


function Drawer(props) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const user = useSelector((store) => store.user);


  let nonAdminLoginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  let adminLoginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null && user.is_admin == false) {
    nonAdminLoginLinkData.path = '/user';
    nonAdminLoginLinkData.text = 'Home';
  } 
  else if (user.id !=null && user.is_admin == true){
    adminLoginLinkData.path = '/admin'
    adminLoginLinkData.text = 'Home'

  }


  return (
    <React.Fragment>

    <SwipeableDrawer 
     classes={{paper: classes.nav}}
     disableBackdropTransition={!iOS} 
     disableDiscovery={iOS} 
     open={openDrawer} 
     onClose={()=> setOpenDrawer(false)} 
     onOpen={()=> setOpenDrawer(true)} >
 <List>
        {user.id && (
          <React.Fragment>
    {/* INFO PAGE */}
          <ListItem  component={Link} to="/info" classes={{root: classes.item}}>
            <ListItemText classes={{primary: classes.text}}> Info Page </ListItemText>
             <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize='large' style={{color: '#5BC6CC'}}/>
            </ListItemSecondaryAction>
         </ListItem>
         <Divider classes={{root: classes.root}}/>
         </React.Fragment>
          )}

    {/* ABOUT PAGE */}
        <ListItem  component={Link} to="/about" classes={{root: classes.item}}>
           <ListItemText classes={{primary: classes.text}}> About </ListItemText>
            <ListItemSecondaryAction edge="end">
             <ChevronRightIcon fontSize='large' style={{color: '#5BC6CC'}}/>
            </ListItemSecondaryAction>
         </ListItem>
         <Divider classes={{root: classes.root}}/>

    {/* INCIDENT */}
         <ListItem  component={Link} to="/incident" classes={{ root: classes.item }}>
            <ListItemText classes={{ primary: classes.text }}> Incident </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" style={{color: '#5BC6CC'}}/>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider classes={{root: classes.root}}/>

     {/* PATIENT HOME */}
        <ListItem  component={Link} to="/patientHome" classes={{root: classes.item}}>
           <ListItemText classes={{primary: classes.text}}> Patient Home </ListItemText>
            <ListItemSecondaryAction edge="end">
             <ChevronRightIcon fontSize='large' style={{color: '#5BC6CC'}}/>
            </ListItemSecondaryAction>
         </ListItem>
         <Divider classes={{root: classes.root}}/>

    {/* TREATMENT HOME */}
         <ListItem component={Link} to="/treatment" classes={{ root: classes.item }}>
            <ListItemText classes={{ primary: classes.text }}> Treament Home </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" style={{color: '#5BC6CC'}}/>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider classes={{root: classes.root}}/>

          <ListItem component={Link} to="/vitals" classes={{ root: classes.item }}>
            <ListItemText classes={{ primary: classes.text }}> Vitals </ListItemText>
            <ListItemSecondaryAction edge="end">
              <ChevronRightIcon fontSize="large" style={{color: '#5BC6CC'}}/>
            </ListItemSecondaryAction>
            </ListItem>
            <Divider classes={{root: classes.root}}/>

    {/* REDUX COOKIE */}
         <ListItem  component={Link} to="/dropdown" classes={{root: classes.item}}>
           <ListItemText classes={{primary: classes.text}}> ReduxCookie </ListItemText>
            <ListItemSecondaryAction edge="end">
             <ChevronRightIcon fontSize='large' style={{color: '#5BC6CC'}}/>
            </ListItemSecondaryAction>
         </ListItem>
         <Divider classes={{root: classes.root}}/>
       
    {/* LOGOUT BUTTON */}
        <ListItem  component={Link} to={nonAdminLoginLinkData.path} classes={{root: classes.item}}>
           <ListItemText classes={{primary: classes.text}}> <LogOutButton/> </ListItemText>
         </ListItem>
         
    </List>
    </SwipeableDrawer>
     <IconButton
      onClick={() => setOpenDrawer(!openDrawer)}
       disableRipple
      >
       <MenuIcon style={{fontSize: 50, color: 'white'}}/>
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
    elevation: trigger ? 4 : 0,
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
