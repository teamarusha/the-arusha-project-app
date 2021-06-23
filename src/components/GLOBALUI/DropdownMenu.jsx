import React from "react";
import globalUseStyle from "./globalUseStyles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";



export default function ControlledAccordions() {
  const globalStyle = globalUseStyle();
  const [expanded, setExpanded] = React.useState(false);
  const [selectedID, setSelectedID] = React.useState(false);

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
    <div className={globalStyle.dropdown.root}>
      {data.map((accordion) => {
        const { id, heading, secondary } = accordion;
        return (
          <Accordion
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={globalStyle.dropdown.heading}>{heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
          </Accordion>
        );
      })}
    </div>
  );
}
