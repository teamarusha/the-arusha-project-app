import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

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
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);
  const [localIncident, setLocalIncident] = useState(
    JSON.parse(localStorage.getItem("incident"))
  );
  const [render, setRender] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // ____________________DROPDOWNS____________________
  let [localDropdownMirror, setLocalDropdownMirror] = useState(
    JSON.parse(localStorage.getItem("dropdowns"))
  );

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("dropdowns")) === null) {
      dispatch({ type: "GET_DROPDOWNS" });
    } else {
      dispatch({ type: "SET_DROPDOWNS", payload: localDropdownMirror });
    }
  }, []);

  useEffect(() => {
    if (dropdowns.go === true) {
      localStorage.setItem("dropdowns", JSON.stringify(dropdowns));
    }
  }, [dropdowns.go]);

  // ____________________LOCAL STORAGE____________________
  useEffect(() => {
    console.log("Storage Mirror:", localIncident);
    console.log(
      "Incident Storage:",
      JSON.parse(localStorage.getItem("incident"))
    );

    if (JSON.parse(localStorage.getItem("incident")) === null) {
      setLocalIncident({
        initialized: true,
        crew: "",
        triageCat: "",
        incidentService: "",
        destinationState: "",
        destinationCounty: "",
        destinationZipCode: "",
        transportDisposition: "",
        transportMethod: "",
        transportMode: "",
        destinationFacility: "",
        patientNumbers: "",
        incidentState: "",
        incidentCounty: "",
        incidentZipCode: "",
        possibleInjury: "",
        alcoholDrugIndicators: "",
      });
      setRender(true);
    }

    // Otherwise, we allow the render as there should be data in storage
    else {
      setRender(true);
    }
  }, []);

  // Main Button
  const [buttonText, setButtonText] = useState("Dispatched");
  function clickMe() {
    console.log("Button clicked...");

    switch (buttonText) {
      case "Dispatched":
        setButtonText("Unit En Route");
        break;
      case "Unit En Route":
        setButtonText("Arrived at Scene");
        break;
      case "Arrived at Scene":
        setButtonText("Arrived at Patient");
        break;
      case "Arrived at Patient":
        setButtonText("En Route to Hospital");
        break;
      case "En Route to Hospital":
        setButtonText("Arrived at Hospital");
        break;
      default:
        setButtonText("Dispatched");
        break;
    }

    const timestamp = Date.now(); // This would be the timestamp you want to format
    console.log(
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(timestamp)
    );
  }

  return (
    <div className="container">
      <h2>Incident Form Home</h2>
      {/* <p>{JSON.stringify(localIncident)}</p>
      <p>{localStorage.getItem("incident")}</p> */}

      <div>
        <Button onClick={clickMe} color="primary" variant="contained">
          {buttonText}
        </Button>
      </div>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{ textAlign: "center" }}
          >
            <Typography
              classes={{ root: classes.text }}
              className={classes.heading}
            >
              Incident Response Form
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IncidentFormResponse
              localIncident={localIncident}
              setLocalIncident={setLocalIncident}
              render={render}
            />
          </AccordionDetails>
        </Accordion>
        <br />

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            style={{ textAlign: "center" }}
          >
            <Typography
              classes={{ root: classes.text }}
              className={classes.heading}
            >
              Incident Disposition Form
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IncidentFormDisposition
              localIncident={localIncident}
              setLocalIncident={setLocalIncident}
              render={render}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            style={{ textAlign: "center" }}
          >
            <Typography
              classes={{ root: classes.text }}
              className={classes.heading}
            >
              Incident Scene Form
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IncidentFormScene
              localIncident={localIncident}
              setLocalIncident={setLocalIncident}
              render={render}
            />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default IncidentHome;
