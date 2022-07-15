import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//Material UI Imports
import { Button } from "@material-ui/core";
import { initialize } from "passport";

function StartoverButton({
  formName,
  incidentMirror,
  setIncidentMirror,
  patientsMirror,
  setPatientsMirror,
  treatmentMirror,
  setTreatmentMirror,
  vitalsMirror,
  setVitalsMirror,
}) {
  // Redux stores for all important variables
  const incident = useSelector((store) => store.incident);
  const patients = useSelector((store) => store.patients);
  const treatment = useSelector((store) => store.treatment);
  const vitals = useSelector((store) => store.vitals);

  // router/redux
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();


  incident.reinitialize = true;


  // KEY PIECE OF FUNCTIONALITY FOR THE APP - DATA INITIALIZATION
  // If this is the first time reaching one of the form pages, localStorage will be empty
  // if this is the case, we set the localStorage for each value to be the default corresponding value from Redux
  // If we are coming from the Summary page, the reinitialize value of the incident reducer will be true, 
  // if this is the case, we clear out localStorage, 
  // then we set the localStorage for each value to be the default corresponding value from Redux 
  // OR if you are coming from the form submission, check for incident reinitialization

      // Resets reinitialize value of reducer to false
      dispatch({ type: "REINITIALIZE_INCIDENT" });

      // Reinitialize INCIDENT Local Storage
      localStorage.setItem("incident", JSON.stringify(incident));
      setIncidentMirror({ ...incident, ['reinitialize']: false });
      // Reinitialize TREATMENT Local Storage
      localStorage.setItem("treatment", JSON.stringify(treatment));
      setTreatmentMirror(treatment);
      // Reinitialize VITALS Local Storage`
      localStorage.setItem("vitals", JSON.stringify(vitals));
      setVitalsMirror(vitals);
      // Reinitialize PATIENTS Local Storage
      localStorage.setItem("patients", JSON.stringify(patients));
      setPatientsMirror(patients);

}

export default StartoverButton;
