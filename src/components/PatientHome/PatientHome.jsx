import React from "react";
import PatientDemographics from "../PatientDemographics/PatientDemographics";
import PatientMedical from "../PatientMedical/PatientMedical";
import PatientSymptoms from "../PatientSymptoms/PatientSymptoms";
import PatientInjury from "../PatientInjury/PatientInjury";
import PatientCardiac from "../PatientCardiac/PatientCardiac";
import AddEditPatient from "../AddEditPatient/AddEditPatient";
import TimestampButton from "../TimestampButton/TimestampButton";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

// ----- Material UI -----
import { makeStyles } from "@material-ui/core/styles";
import { Accordion } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// ----- More Material UI -----
// import globalUseStyle from "./globalUseStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { TextField, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    // textAlign: 'center',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    // color: theme.palette.text.secondary,
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

function PatientHome() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // ____________________WATCHER FUNCTION____________________
  useEffect(() => {
    console.log("UPDATING patients browser storage", patientsMirror);
    localStorage.setItem("patients", JSON.stringify(patientsMirror));
  }, [patientsMirror]);
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

  return (
    <Container component ="main" maxWidth="xs">
    <div className={classes.paper}>
      <br />
     
      <TimestampButton
        incidentMirror={incidentMirror}
        setIncidentMirror={setIncidentMirror}
      />
      <h2>PATIENTS</h2>
      <br />
      <br />
      
      
      <AddEditPatient
        formName={"patient"}
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
              Demographics
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PatientDemographics
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
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
              Medical History
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PatientMedical
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
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
              Symptoms
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PatientSymptoms
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
            />
          </AccordionDetails>
        </Accordion>
        <br />

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
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
              Injury
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PatientInjury
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
            />
          </AccordionDetails>
        </Accordion>
        <br />

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
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
              Cardiac Arrest
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PatientCardiac
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
            />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
    </Container>
  );
}

export default PatientHome;
