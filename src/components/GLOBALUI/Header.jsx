import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KOPIMobileLogo from "../Logo/KOPIMobileLogo";
import globalUseStyle from "./globalUseStyles";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


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


export default function Header(props) {
  
  const globalStyle = globalUseStyle();
  

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={false}>
            <MenuIcon fontSize='large' color="secondary" />
            <KOPIMobileLogo />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={globalStyle.nav.toolbarMargin} />
    </React.Fragment>
  );
}


// import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import KOPIMobileLogo from "../Logo/KOPIMobileLogo";
// import { makeStyles } from "@material-ui/styles";

// import { Menu, MenuItem, SwipeableDrawer, List, ListItem, ListItemText } from "@material-ui/core";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
// import { useState } from "react";
// import { Link } from "react-router-dom";



// // function LongMenu(props) {
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const open = Boolean(anchorEl);
// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };
  
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };
// //   return (
// //     <div>
// //       <IconButton
// //         onClick={handleClick}
// //         >
// //         <MenuIcon style={{fontSize: 50, color: 'white'}}/>
// //       </IconButton>
      
// //     </div>
// //   );
// // }


// function Drawer(props) {

//   const [openDrawer, setOpenDrawer] = useState(false)
//   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

//   return(

//   <React.Fragment>
//     <SwipeableDrawer style={{width: '100%'}} disableBackdropTransition={!iOS} 
//     disableDiscovery={iOS} 
//     open={openDrawer} 
//     onClose={()=> setOpenDrawer(false)} 
//     onOpen={()=> setOpenDrawer(true)}>
//       <List>
//         <ListItem >
//           <ListItemText> Incident </ListItemText>
//         </ListItem>
//         <ListItem >
//           <ListItemText> Patient </ListItemText>
//         </ListItem>
//         <ListItem >
//           <ListItemText> Vitals </ListItemText>
//         </ListItem>
//         <ListItem >
//           <ListItemText> Treatment </ListItemText>
//         </ListItem>
//         <ListItem >
//           <ListItemText> Summary </ListItemText>
//         </ListItem>
//         <ListItem >
//           <ListItemText> Logout </ListItemText>
//         </ListItem>
//       </List>
//     </SwipeableDrawer>
//     <IconButton
//       onClick={() => setOpenDrawer(!openDrawer)}
//       disableRipple
//       >
//       <MenuIcon style={{fontSize: 50, color: 'white'}}/>
//     </IconButton>
//   </React.Fragment>
// )}

// function ElevationScroll(props) {
  
//   const { children } = props;
  
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });
  
//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// const useStyles = makeStyles((theme) => ({
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//     marginBottom: '2em',
//   },
// }));

// export default function Header(props) {
//   const classes = useStyles();
 
//   return (
//     <React.Fragment>
//       <ElevationScroll>
//         <AppBar position="fixed" color="primary">
//           <Toolbar disableGutters={false}>
//            <Drawer/>
//             <KOPIMobileLogo />
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//       <div className={classes.toolbarMargin} />
//     </React.Fragment>
//   );
// }