import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IncidentFormResponse from "./IncidentFormResponse";
import IncidentFormDisposition from "./IncidentFormDisposition";
import IncidentFormScene from "./IncidentFormScene";
import AddEditPatient from "../AddEditPatient/AddEditPatient";
import TimestampButton from "../TimestampButton/TimestampButton";
import SummaryFieldSubmit from "../SummaryFieldSubmit/SummaryFieldSubmit";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./Styles";

function IncidentHome() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const dropdowns = useSelector((store) => store.dropdowns);

  const [incidentMirror, setIncidentMirror] = useState(
    JSON.parse(localStorage.getItem("incident"))
  );
  const [patientsMirror, setPatientsMirror] = useState(
    JSON.parse(localStorage.getItem("patients"))
  );
  const [treatmentMirror, setTreatmentMirror] = useState(
    JSON.parse(localStorage.getItem("treatment"))
  );
  const [vitalsMirror, setVitalsMirror] = useState(
    JSON.parse(localStorage.getItem("vitals"))
  );

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // ____________________WATCHER FUNCTION____________________
  useEffect(() => {
    console.log("UPDATING browser storage", incidentMirror);
    localStorage.setItem("incident", JSON.stringify(incidentMirror));
  }, [incidentMirror]);

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
  // _________________________________________________

  return (
    <div className="container">
      <h2>Incident</h2>
      <br />
      <br />
      <TimestampButton
        incidentMirror={incidentMirror}
        setIncidentMirror={setIncidentMirror}
      />
      <br />
      <br />
      <AddEditPatient
        formName={"incident"}
        incidentMirror={incidentMirror}
        setIncidentMirror={setIncidentMirror}
        patientsMirror={patientsMirror}
        setPatientsMirror={setPatientsMirror}
        treatmentMirror={treatmentMirror}
        setTreatmentMirror={setTreatmentMirror}
        vitalsMirror={vitalsMirror}
        setVitalsMirror={setVitalsMirror}
      />
      <br />
      <br />
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
              localIncident={incidentMirror}
              setLocalIncident={setIncidentMirror}
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
              localIncident={incidentMirror}
              setLocalIncident={setIncidentMirror}
            />
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
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
              Incident Scene Form
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IncidentFormScene
              localIncident={incidentMirror}
              setLocalIncident={setIncidentMirror}
            />
          </AccordionDetails>
        </Accordion>
      </div>
      <SummaryFieldSubmit />
    </div>
  );
}

export default IncidentHome;
