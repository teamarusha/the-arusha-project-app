import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function DropDown() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
        className={classes.root}
      >
        <Grid container justify="center">

          <Grid item>
            <ListItem button onClick={(e) => setOpen({e.currentTarget})}>
              <ListItemText primary="Clinical Dropdown 1" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
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
