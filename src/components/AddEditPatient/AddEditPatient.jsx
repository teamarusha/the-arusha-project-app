import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//Material UI Imports
import { Button } from "@material-ui/core";

function AddEditPatient({
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

  // KEY PIECE OF FUNCTIONALITY FOR THE APP - DATA INITIALIZATION
  // If this is the first time reaching one of the form pages, localStorage will be empty
  // if this is the case, we set the localStorage for each value to be the default corresponding value from Redux
  // If we are coming from the Summary page, the reinitialize value of the incident reducer will be true, 
  // if this is the case, we clear out localStorage, 
  // then we set the localStorage for each value to be the default corresponding value from Redux 
  // OR if you are coming from the form submission, check for incident reinitialization
  useEffect(() => {

    // Reinitialize localStorage if we just submit the form
    if (incident.reinitialize === true) {

      // Resets reinitialize value of reducer to false
      dispatch({ type: "REINITIALIZE_INCIDENT" });

      // Reinitialize INCIDENT Local Storage
      localStorage.setItem("incident", JSON.stringify(incident));
      setIncidentMirror({ ...incident, ['reinitialize']: false });
      // Reinitialize TREATMENT Local Storage
      localStorage.setItem("treatment", JSON.stringify(treatment));
      setTreatmentMirror(treatment);
      // Reinitialize VITALS Local Storage
      localStorage.setItem("vitals", JSON.stringify(vitals));
      setVitalsMirror(vitals);
      // Reinitialize PATIENTS Local Storage
      localStorage.setItem("patients", JSON.stringify(patients));
      setPatientsMirror(patients);

    } else {
      // Initialize INCIDENT
      if (incidentMirror === null) {
        localStorage.setItem("incident", JSON.stringify(incident));
        setIncidentMirror(incident);
      } else {
        // dispatch({
        //   type: "SET_INCIDENT",
        //   payload: JSON.parse(localStorage.getItem("incident")),
        // });
        setIncidentMirror(JSON.parse(localStorage.getItem("incident")));
      }

      // Initialize TREATMENT
      if (treatmentMirror === null) {
        localStorage.setItem("treatment", JSON.stringify(treatment));
        setTreatmentMirror(treatment);
      } else {
        // dispatch({
        //   type: "SET_TREATMENT",
        //   payload: JSON.parse(localStorage.getItem("treatment")),
        // });
        setTreatmentMirror(JSON.parse(localStorage.getItem("treatment")));
      }

      // Initialize VITALS
      if (vitalsMirror === null) {
        localStorage.setItem("vitals", JSON.stringify(vitals));
        setVitalsMirror(vitals);
      } else {
        // dispatch({
        //   type: "SET_VITALS",
        //   payload: JSON.parse(localStorage.getItem("vitals")),
        // });
        setVitalsMirror(JSON.parse(localStorage.getItem("vitals")));
      }

      // // Initialize PATIENTS
      if (patientsMirror === null) {
        localStorage.setItem("patients", JSON.stringify(patients));
        setPatientsMirror(patients);
      } else {
        // dispatch({
        //   type: "SET_PATIENTS",
        //   payload: JSON.parse(localStorage.getItem("patients")),
        // });
        setPatientsMirror(JSON.parse(localStorage.getItem("patients")));
      }
    }
  }, []);

  // ----------Watchers to update Storage on patient addition----------
  useEffect(() => {
    console.log("UPDATING incident browser storage", incidentMirror);
    localStorage.setItem("incident", JSON.stringify(incidentMirror));
  }, [incidentMirror]);

  useEffect(() => {
    console.log("UPDATING patients browser storage", patientsMirror);
    localStorage.setItem("patients", JSON.stringify(patientsMirror));
  }, [patientsMirror]);

  useEffect(() => {
    console.log("UPDATING treatment browser storage", treatmentMirror);
    localStorage.setItem("treatment", JSON.stringify(treatmentMirror));
  }, [treatmentMirror]);

  useEffect(() => {
    console.log("UPDATING vitals browser storage", vitalsMirror);
    localStorage.setItem("vitals", JSON.stringify(vitalsMirror));
  }, [vitalsMirror]);

  useEffect(() => {
    // If the user comes to this page without a patient ID, get redirected to patient 1
    if (!id) {
      history.push(`/${formName}/1`);
    }
  }, []);

  // This function handles initialization of new patients
  function addPatient() {
    // newPatientID will be the next patient added. Does not use params from the url
    // Instead it looks at the patientArray and adds the next patient based on that
    // THIS ID IS NOT THE PATIENT'S ID FROM THE DATABASE,
    // THIS VALUE MEANS NOTHING AFTER SUBMISSION
    let newPatientID = patientsMirror.patientArray.length + 1;
    console.log("new patient ID", newPatientID);

    setIncidentMirror({
      ...incidentMirror,
      dispositionArray: [...incidentMirror.dispositionArray, newPatientID],
      [newPatientID + "destinationState"]: "",
      [newPatientID + "destinationCounty"]: "",
      [newPatientID + "destinationZipCode"]: "",
      [newPatientID + "transportDisposition"]: 0,
      [newPatientID + "transportMethod"]: "",
      [newPatientID + "transportMode"]: "",
      [newPatientID + "destinationFacility"]: "",
    });

    setPatientsMirror({
      ...patientsMirror,
      patientArray: [...patientsMirror.patientArray, newPatientID],
      [newPatientID + "patientFirstName"]: "",
      [newPatientID + "patientLastName"]: "",
      [newPatientID + "patientAddress"]: "",
      [newPatientID + "patientHomeCounty"]: "",
      [newPatientID + "patientHomeState"]: "",
      [newPatientID + "patientHomeZip"]: "",
      [newPatientID + "patientGender"]: "",
      [newPatientID + "patientRace"]: "",
      [newPatientID + "patientDateOfBirth"]: "",
      [newPatientID + "patientAge"]: "",
      [newPatientID + "patientAgeUnits"]: "",
      [newPatientID + "patientMedConditions"]: "",
      [newPatientID + "patientAllergies"]: "",
      [newPatientID + "patientCurrMedications"]: "",
      [newPatientID + "anatomicLocation"]: "",
      [newPatientID + "organSystem"]: "",
      [newPatientID + "symptomOnsetDate"]: "",
      [newPatientID + "symptomOnsetTime"]: "",
      [newPatientID + "lastKnownWellDate"]: "",
      [newPatientID + "lastKnownWellTime"]: "",
      [newPatientID + "primarySymptom"]: "",
      [newPatientID + "otherSymptoms"]: "",
      [newPatientID + "initialAcuity"]: "",
      [newPatientID + "finalAcuity"]: "",
      [newPatientID + "primaryImpression"]: "",
      [newPatientID + "injuryLocation"]: "",
      [newPatientID + "injuryCause"]: "",
      [newPatientID + "cardiacArrest"]: 0,
      [newPatientID + "cardiacArrestEtiology"]: "",
      [newPatientID + "resuscitationAttempt"]: "",
      [newPatientID + "cardiacArrestWitness"]: "",
      [newPatientID + "aedUsePrior"]: "",
      [newPatientID + "cprProvided"]: "",
      [newPatientID + "spontaneousCirculation"]: "",
      [newPatientID + "cardiacArrestDate"]: "",
      [newPatientID + "cardiacArrestTime"]: "",
      [newPatientID + "cprStopped"]: "",
      [newPatientID + "cprInitiator"]: "",
      [newPatientID + "aedApplicator"]: "",
      [newPatientID + "aedDefibrillator"]: "",
    });

    setTreatmentMirror({
      ...treatmentMirror,
      [newPatientID + "medicationArray"]: [1],
      [newPatientID + "lastMedication"]: 1,
      [newPatientID + 'medicationTimestamp1']: "",
      [newPatientID + "medication1"]: "",
      [newPatientID + "routeAdministered1"]: "",
      [newPatientID + "dosage1"]: "",
      [newPatientID + "units1"]: "",
      [newPatientID + "medicationResponse1"]: "",
      [newPatientID + "medsAdminBy1"]: "",
      [newPatientID + "procedureArray"]: [1],
      [newPatientID + "lastProcedure"]: 1,
      [newPatientID + 'procedureTimestamp1']: "",
      [newPatientID + "procedure1"]: "",
      [newPatientID + "procedureAttempts1"]: "",
      [newPatientID + "successfulProcedure1"]: "",
      [newPatientID + "responseToProcedure1"]: "",
      [newPatientID + "procedurePerformedBy1"]: "",
    });

    setVitalsMirror({
      ...vitalsMirror,
      [newPatientID + "vitalsArray"]: [1],
      [newPatientID + "lastVital"]: 1,
      [newPatientID + "systolicBloodPressure1"]: "",
      [newPatientID + "heartRate1"]: "",
      [newPatientID + "pulseOximetry1"]: "",
      [newPatientID + "respiratoryRate1"]: "",
      [newPatientID + "bloodGlucoseLevel1"]: "",
      [newPatientID + "glasgowComaScoreEye1"]: "",
      [newPatientID + "glasgowComaScoreVerbal1"]: "",
      [newPatientID + "glasgowComaScoreMotor1"]: "",
      [newPatientID + "glasgowComaScoreQualifier1"]: 1,
      [newPatientID + "painScaleScore1"]: 1,
      [newPatientID + "strokeScaleScore1"]: 1,
      [newPatientID + "strokeScaleType1"]: 1,
      [newPatientID + 'vitalTimestamp1']: ""
    });
  }

  // Simply redirects to the patient page of a new patient
  // based on their position in the patientArray
  function changePatient(patientNumber) {
    history.push(`/${formName}/${patientNumber}`);
  }

  return (
    <div>
      {patientsMirror && (
        <div>
          {/* Add Patient Button */}
          <Button color="primary" variant="contained" onClick={addPatient}>
            Add Patient
          </Button>
          <br />
          <br />
          <br />
          {patientsMirror &&
            patientsMirror.patientArray.map((value) => (
              // Edit Patient Buttons
              <Button
                color="secondary"
                variant="contained"
                size="small"
                key={`${value}changePatient`}
                disabled={id == value}
                onClick={() => changePatient(value)}
              >
                Edit Patient {value}
              </Button>
            ))}


        </div>
      )}
    </div>
  );
}

export default AddEditPatient;
