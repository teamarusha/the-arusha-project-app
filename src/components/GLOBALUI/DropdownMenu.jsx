import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import globalUseStyle from "./globalUseStyles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { TextField, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "10rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },  
  rootExpanded: {
    // backgroundColor: "#5BC6CC",
    flexDirection: 'column'
  },
  paper: {
    backgroundColor: "#99d5cf"
  },
  textfield: {
    margin: theme.spacing(1)
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [selectedID, setSelectedID] = React.useState(false);

//   const rootClass = !expanded ? classes.rootExpanded : classes.root;

  const handleListItemClick = (event, id) => {
    setSelectedID(id);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      id: 1,
      heading: "Panel 1",
      secondary: "diagnosis 1",
    },
    {
      id: 2,
      heading: "Panel 2",
      secondary: "diagnosis 2",
    },
  ];

  return (
    <Grid  Container justify='center' className={classes.root}>
        <Grid item xs={12} s={6} m={4}>
      {data.map((accordion) => {
        const { id, heading, secondary } = accordion;
        return (
            
          <Accordion
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{heading}</Typography>
            </AccordionSummary>
            <Paper className={classes.paper}>
            <AccordionDetails className={classes.rootExpanded}>
            <TextField className={classes.textfield} variant='outlined'/> 
            <TextField className={classes.textfield} variant='outlined'/> 
            <TextField className={classes.textfield} variant='outlined'/> 
              <List component="nav" aria-label="main mailbox folders">
                <ListItem
                  button
                  selected={selectedID === id}
                  onClick={(event) => handleListItemClick(event, id)}
                >
                  <ListItemText primary={secondary} />
                </ListItem>
              </List>
            </AccordionDetails>
            </Paper>
          </Accordion>
          
          );
        })}
        </Grid>
    </Grid>
  );
}





















// import React from "react";
// import globalUseStyle from "./globalUseStyles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
// import InboxIcon from "@material-ui/icons/Inbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import { TextField, Paper } from "@material-ui/core";



// export default function ControlledAccordions() {
//   const globalStyle = globalUseStyle();
//   const [expanded, setExpanded] = React.useState(false);
//   const [selectedID, setSelectedID] = React.useState(false);

//   const handleListItemClick = (event, id) => {
//     setSelectedID(id);
//   };

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const data = [
//     {
//       id: 1,
//       heading: "Panel 1",
//       secondary: "diagnosis 1",
//     },
//     {
//       id: 2,
//       heading: "Panel 2",
//       secondary: "diagnosis 2",
//     },
//   ];

//   return (
//     <div className={globalStyle.dropdown.root}>
//       {data.map((accordion) => {
//         const { id, heading, secondary } = accordion;
//         return (
//           <Accordion
//             expanded={expanded === id}
//             key={id}
//             onChange={handleChange(id)}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography className={globalStyle.dropdown.heading}>{heading}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List component="nav" aria-label="main mailbox folders">
//                 <ListItem
//                   button
//                   selected={selectedID === id}
//                   onClick={(event) => handleListItemClick(event, id)}
//                 >
//                   <ListItemText primary={secondary} />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         );
//       })}
//     </div>
//   );
// }
