import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import IncidentFormResponse from "./IncidentFormResponse";
import IncidentFormDisposition from "./IncidentFormDisposition";
import IncidentFormScene from "./IncidentFormScene";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { ExpandMoreIcon } from "@material-ui/icons/ExpandMore";

import useStyles from "./Styles";

function IncidentHome() {
  const classes = useStyles();
  const { id } = useParams();
  const [localIncident, setLocalIncident] = useState();
  const [render, setRender] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  const handleListItemClick = (event, id) => {
    setSelectedId(id);
  };

  const handleChange = (id) => {
    // setExpanded(isExpanded ? panel : false);
    setExpanded(expanded === id ? -1 : id);
  };

  // To render on page load
  useEffect(() => {
    // console.log( 'Params id:', id );
    console.log("Cookie Mirror", localIncident);
    console.log(
      "Incident Storage",
      JSON.parse(localStorage.getItem("incident"))
    );

    if (JSON.parse(localStorage.getItem("incident")) === null) {
      setLocalIncident({
        crew: "",
        triageCat: "",
        serviceType: "",
        destinationState: "",
        destinationCounty: "",
        destinationZipCode: "",
        transportDisposition: "",
        transportMethod: "",
        transportMode: "",
        destinationType: "",
        patientNumbers: "",
        incidentState: "",
        incidentCounty: "",
        incidentZipCode: "",
        possibleInjury: "",
        alcoholDrugIndicators: "",
      });
      setRender(true);
    }
  }, []);

  return (
    <Grid Container justify="center" className={classes.root}>
      <Grid item xs={12} s={6} m={4}>
        <Accordion
          expanded={expanded === id}
          key={id}
          onChange={handleChange(id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.header}>"Incident Form"</Typography>
          </AccordionSummary>
          <Paper className={classes.paper}>
            <AccordionDetails className={classes.rootExpanded}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem
                  button
                  selected={selectedId === id}
                  onClick={(event) => handleListItemClick(event, id)}
                >
                  <ListItemText
                    primary={IncidentFormResponse(
                      localIncident,
                      setLocalIncident,
                      render
                    )}
                  />
                </ListItem>
                <ListItem
                  button
                  selected={selectedId === id}
                  onClick={(event) => handleListItemClick(event, id)}
                >
                  <ListItemText primary={IncidentFormScene} />
                </ListItem>
                <ListItem
                  button
                  selected={selectedId === id}
                  onClick={(event) => handleListItemClick(event, id)}
                >
                  <ListItemText primary={IncidentFormDisposition} />
                </ListItem>
              </List>
            </AccordionDetails>
          </Paper>
        </Accordion>
      </Grid>
    </Grid>
  );
}

export default IncidentHome;
