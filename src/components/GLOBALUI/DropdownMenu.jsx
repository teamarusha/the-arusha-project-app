import React from "react";
import { useState } from "react";
import globalUseStyle from "./globalUseStyles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";


function DropDown() {
  const globalStyle = globalUseStyle();
  
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <List
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
        className={globalStyle.dropdown.root}
      >
        <Grid container justify="center">

          <Grid item>
            <ListItem button onClick={(e) => setOpen({e.currentTarget})}>
              <ListItemText primary="Clinical Dropdown 1" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={globalStyle.dropdown.nested}>
                  <ListItemText primary="diagnosis 1" />
                </ListItem>
              </List>
            </Collapse>
          </Grid>

          <Grid item>
            <ListItem button >
              <ListItemText primary="Clinical Dropdown 2" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="diagnosis 2" />
                </ListItem>
              </List>
            </Collapse>
          </Grid>

        </Grid>
      </List>
    </>
  );
}

export default DropDown;
