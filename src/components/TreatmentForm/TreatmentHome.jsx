import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TreatmentMedsForm from "./TreatmentMedsForm";
import TreatmentProcedureForm from "./TreatmentProcedureForm";
import AddEditPatient from "../AddEditPatient/AddEditPatient";
import TimestampButton from "../TimestampButton/TimestampButton";

//____________________Material UI Imports____________________

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container,
  makeStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


// ADJUSTS STYLING FOR MUI COMPONENTS WITH THESE CLASSES
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },

  text: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
}));


function TreatmentHome() {
  // DECLARE VARIABLES FOR USE OF THESE FUNCTIONS
  const classes = useStyles();
  const dispatch = useDispatch();

  // GRAB DROPDOWNS STORED IN DROPDOWNS REDUCER
  const dropdowns = useSelector((store) => store.dropdowns);

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
  const localDropdownMirror = JSON.parse(localStorage.getItem("dropdowns"));

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

  return (
    <Container component="main" maxWidth="xs" >
      <div className={classes.paper}>
        <br />
        {/* RENDER TIMESTAMP BUTTON */}
        <TimestampButton
          incidentMirror={incidentMirror}
          setIncidentMirror={setIncidentMirror}
        />
        <br />
        <h2>TREATMENT</h2>
        <br />

        {/* ADD PATIENT AND EDIT PATIENT BUTTONS */}
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
      </div>
      <div className={classes.root}>
        {/* MEDICATION ADMINISTERED ACCORDIAN */}
        <Accordion
          style={{ backgroundColor: '#d3d3d3' }}
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
              MEDICATION ADMINISTERED
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

        {/* PROCEDURES ADMINISTERED ACCORDIAN */}
        <Accordion
          style={{ backgroundColor: '#d3d3d3' }}

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
              PROCEDURE ADMINISTERED
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TreatmentProcedureForm
              localTreatment={treatmentMirror}
              setLocalTreatment={setTreatmentMirror}
            />
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
      </div>

    </Container>
  );
}

export default TreatmentHome;
