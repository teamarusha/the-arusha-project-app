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

// ----- Material UI -----
import { makeStyles } from "@material-ui/core/styles";
import { Accordion } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

//CHANGE STYLING FOR MUI COMPONENTS WITH THESE CLASSES
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

function PatientHome() {
  //DECLARE VARIABLES FOR USE OF THESE FUNCTIONS
  const classes = useStyles();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);

  // GRAB DROPDOWNS STORED IN REDUCER
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <br />
        {/* BIG TIMESTAMP BUTTON */}
        <TimestampButton
          incidentMirror={incidentMirror}
          setIncidentMirror={setIncidentMirror}
        />
        <br />
        <h2>PATIENTS</h2>
        <br />


        {/* ADD AND EDIT PATIENT BUTTONS */}
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
      </div>
      <div className={classes.root}>
        {/* PATIENT DEMOGRAPHICS ACCORDIAN */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{ backgroundColor: '#d3d3d3' }}
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
              DEMOGRAPHICS
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

        {/* MEDICAL HISTORY ACCORDIAN */}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{ backgroundColor: '#d3d3d3' }}
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
              MEDICAL HISTORY
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

        {/* PATIENT SYMPTOMS ACCORDIAN */}
        <Accordion
          style={{ backgroundColor: '#d3d3d3' }}
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
              SYMPTOMS
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

        {/* PATIENT INJURY ACCORDIAN */}
        <Accordion
          style={{ backgroundColor: '#d3d3d3' }}
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
              INJURY
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
        
        {/* CARDIAC ARREST ACCORDIAN */}
        <Accordion
          style={{ backgroundColor: '#d3d3d3' }}
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
              CARDIAC ARREST
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

    </Container>
  );
}

export default PatientHome;
