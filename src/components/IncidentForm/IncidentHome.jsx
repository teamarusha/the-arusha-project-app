import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IncidentFormResponse from "./IncidentFormResponse";
import IncidentFormDisposition from "./IncidentFormDisposition";
import IncidentFormScene from "./IncidentFormScene";
import AddEditPatient from "../AddEditPatient/AddEditPatient";
import TimestampButton from "../TimestampButton/TimestampButton";


import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container
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
  // _________________________________________________

  return (
    <Container component="main" maxWidth="xs" >
      <div className={classes.paper}>


        <br />

        <TimestampButton className={classes.timestamp}
          incidentMirror={incidentMirror}
          setIncidentMirror={setIncidentMirror}
        />
        <br />
        <h2>INCIDENT</h2>
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
      </div>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{ backgroundColor: '#d3d3d3' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              classes={{ root: classes.text }}

            >
              RESPONSE
            </Typography>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.AccordionDetails }}>
            <IncidentFormResponse
              localIncident={incidentMirror}
              setLocalIncident={setIncidentMirror}
            />
          </AccordionDetails>
        </Accordion>
        <br />

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
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

            >
              SCENE
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IncidentFormScene
              localIncident={incidentMirror}
              setLocalIncident={setIncidentMirror}
            />
          </AccordionDetails>

        </Accordion>
        <br />
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

            >
              DISPOSITION
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
        <br />

      </div>
    </Container>
  );
}

export default IncidentHome;
