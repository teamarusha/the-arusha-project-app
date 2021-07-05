import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TreatmentMedsForm from "./TreatmentMedsForm";
import TreatmentProcedureForm from "./TreatmentProcedureForm";
import AddEditPatient from "../AddEditPatient/AddEditPatient";
import TimestampButton from "../TimestampButton/TimestampButton";

//____________________Material UI Imports____________________
import useStyles from "./Styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  Container
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
  // ____________________WATCHER FUNCTION____________________
  useEffect(() => {
    console.log("UPDATING browser storage", localTreatment);
    localStorage.setItem("treatment", JSON.stringify(localTreatment));
  }, [localTreatment]);

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
    <Container component="main" maxWidth="xs" >
      <br />
      <br />
       <TimestampButton
        incidentMirror={incidentMirror}
        setIncidentMirror={setIncidentMirror}
      />
    <div className={classes.paper}>
      <h2>TREATMENT</h2>
      
     
      <br />
      
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
      <div className={classes.root}>
        <Accordion
         style={{backgroundColor: '#82E0E5'}}
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

        <Accordion
          style={{backgroundColor: '#5BC6CC'}}
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
    </div>
    </Container>
  );
}

export default TreatmentHome;
