import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TreatmentMedsForm from "./TreatmentMedsForm";
import TreatmentProcedureForm from "./TreatmentProcedureForm";
import AddEditPatient from "../AddEditPatient/AddEditPatient";

//____________________Material UI Imports____________________
import useStyles from "./Styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function TreatmentHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);
  const [localTreatment, setLocalTreatment] = useState(
    JSON.parse(localStorage.getItem("treatment"))
  );
  const [expanded, setExpanded] = useState(false);
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
      <h2>Treament</h2>

      {/* <p>Incident Mirror: {JSON.stringify(incidentMirror)}</p>
      <p>Incident Storage: {localStorage.getItem("incident")}</p>
      <p>Vitals Mirror: {JSON.stringify(vitalsMirror)}</p>
      <p>Vitals Storage: {localStorage.getItem("vitals")}</p>
      <p>Treatment Mirror: {JSON.stringify(treatmentMirror)}</p>
      <p>Treatment Storage: {localStorage.getItem("treatment")}</p>
      <p>Patients Mirror: {JSON.stringify(patientsMirror)}</p>
      <p>Patients Storage: {localStorage.getItem("patients")}</p> */}

      <AddEditPatient
        formName={"treatment"}
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
              Medication Administered
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TreatmentMedsForm
              localTreatment={treatmentMirror}
              setLocalTreatment={setTreatmentMirror}
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
              Procedure Administered
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TreatmentProcedureForm
              localTreatment={treatmentMirror}
              setLocalTreatment={setTreatmentMirror}
            />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default TreatmentHome;
