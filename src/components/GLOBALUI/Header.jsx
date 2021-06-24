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
