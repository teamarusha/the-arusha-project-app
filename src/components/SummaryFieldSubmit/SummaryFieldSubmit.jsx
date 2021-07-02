import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TimestampButton from "../TimestampButton/TimestampButton";
//____________________Material UI Imports____________________
import { Button, TextField } from "@material-ui/core";
function SummaryFieldSubmit(params) {
  const dispatch = useDispatch();


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
  // ____________________WATCHER FUNCTION____________________
  useEffect(() => {
    console.log("UPDATING browser storage", incidentMirror);
    localStorage.setItem("incident", JSON.stringify(incidentMirror));
  }, [incidentMirror]);

  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setIncidentMirror({
      ...incidentMirror,
      [newParameter.key]: newParameter.thing,
    });
  }

  const [errorMessages, setErrorMessages] = useState([]);
  const [allowSubmission, setAllowSubmission] = useState(true);

  useEffect(() => {
    checkInputs();
  }, [])

  function checkInputs() {
    let incidentErrorMessage = `Missing input from incident form`;
    let allErrorMessages = []

    // The whole check will loop through this array to determine where any incompletes are
    let patientArray = patientsMirror.patientArray;

    // If any incident information is unfilled out, we give an error
    if (
      incidentMirror.alcoholDrugIndicators === "" ||
      incidentMirror.crew === "" ||
      incidentMirror.incidentCounty === "" ||
      incidentMirror.incidentService === "" ||
      incidentMirror.incidentState === "" ||
      incidentMirror.incidentSummary === "" ||
      incidentMirror.incidentZipCode === "" ||
      incidentMirror.patientNumbers === "" ||
      incidentMirror.possibleInjury === "" ||
      incidentMirror.triageCat === "" ||
      incidentMirror.unitArrivedDestination === "" ||
      incidentMirror.unitArrivedPatient === "" ||
      incidentMirror.unitArrivedScene === "" ||
      incidentMirror.unitEnRoute === "" ||
      incidentMirror.unitInService === "" ||
      incidentMirror.unitLeftScene === "" ||
      incidentMirror.unitNotified === "" ||
      incidentMirror.unitTransferCare === ""
    ) {
      allErrorMessages.push(incidentErrorMessage);
      setAllowSubmission(false);
    }



    // Check all patient disposition info for missing inputs/ error cases
    // Loop through a patient's incident inputs
    for (let patient of patientArray) {
      let incidentPatientErrorMessage = `Missing input from incident disposition form for patient ${patient}`;

      if (incidentMirror[`${patient}transportDisposition`] == 0) {
        // THIS IS AN ERROR CASE
        allErrorMessages.push(incidentPatientErrorMessage);
        setAllowSubmission(false);
      }

      // If it isn't 0 and it is less than 4, we want to check the other inputs of transport disposition
      else if (incidentMirror[`${patient}transportDisposition`] <= 4) {
        if (
          incidentMirror[`${patient}destinationCounty`] === '' ||
          incidentMirror[`${patient}destinationFacility`] === '' ||
          incidentMirror[`${patient}destinationState`] === '' ||
          incidentMirror[`${patient}destinationZipCode`] === '' ||
          incidentMirror[`${patient}transportDisposition`] === '' ||
          incidentMirror[`${patient}transportMethod`] === '' ||
          incidentMirror[`${patient}transportMode`] === ''
        ) {
          // THIS IS AN ERROR CASE
          allErrorMessages.push(incidentPatientErrorMessage);
          setAllowSubmission(false);
        }
      }
    }


    // Check Patients for error states and missing values
    for (let patient of patientArray) {

      let patientCardiacErrorMessage = `Missing input from patient cardiac arrest form for patient ${patient}`;


      // Check patient cardiac first for missing inputs or error cases
      if (patientsMirror[`${patient}cardiacArrest`] == 0) {
        allErrorMessages.push(patientCardiacErrorMessage);
        setAllowSubmission(false);
      }
      // If the Patient Form says yes to Cardiac Arrest, check its inputs
      else if (patientsMirror[`${patient}cardiacArrest`] > 1) {
        if (
          patientsMirror[`${patient}aedApplicator`] === '' ||
          patientsMirror[`${patient}aedDefibrillator`] === '' ||
          patientsMirror[`${patient}aedUsePrior`] === '' ||
          patientsMirror[`${patient}cardiacArrestEtiology`] === '' ||
          patientsMirror[`${patient}cardiacArrestWitness`] === '' ||
          patientsMirror[`${patient}cprInitiator`] === '' ||
          patientsMirror[`${patient}cprProvided`] === '' ||
          patientsMirror[`${patient}cprStopped`] === '' ||
          patientsMirror[`${patient}resuscitationAttempt`] === '' ||
          patientsMirror[`${patient}spontaneousCirculation`] === '' ||
          patientsMirror[`${patient}timeCardiacArrest`] === ''
        ) {
          allErrorMessages.push(patientCardiacErrorMessage);
          setAllowSubmission(false);
        }
      }

      let patientErrorMessage = `Missing input from patient form for patient ${patient}`;
      if (
        patientsMirror[`${patient}anatomicLocation`] === '' ||
        patientsMirror[`${patient}finalAcuity`] === '' ||
        patientsMirror[`${patient}initialAcuity`] === '' ||
        patientsMirror[`${patient}injuryCause`] === '' ||
        patientsMirror[`${patient}injuryLocation`] === '' ||
        patientsMirror[`${patient}lastKnownWell`] === '' ||
        patientsMirror[`${patient}organSystem`] === '' ||
        patientsMirror[`${patient}otherSymptoms`] === '' ||
        patientsMirror[`${patient}patientAddress`] === '' ||
        patientsMirror[`${patient}patientAge`] === '' ||
        patientsMirror[`${patient}patientAgeUnits`] === '' ||
        patientsMirror[`${patient}patientAllergies`] === '' ||
        patientsMirror[`${patient}patientCurrMedications`] === '' ||
        patientsMirror[`${patient}patientDateOfBirth`] === '' ||
        patientsMirror[`${patient}patientFirstName`] === '' ||
        patientsMirror[`${patient}patientGender`] === '' ||
        patientsMirror[`${patient}patientHomeCounty`] === '' ||
        patientsMirror[`${patient}patientHomeState`] === '' ||
        patientsMirror[`${patient}patientHomeZip`] === '' ||
        patientsMirror[`${patient}patientLastName`] === '' ||
        patientsMirror[`${patient}patientMedConditions`] === '' ||
        patientsMirror[`${patient}patientRace`] === '' ||
        patientsMirror[`${patient}primaryImpression`] === '' ||
        patientsMirror[`${patient}primarySymptom`] === '' ||
        patientsMirror[`${patient}symptomOnset`] === ''
      ) {
        allErrorMessages.push(patientErrorMessage);
        setAllowSubmission(false);

      }
    }

    setErrorMessages(allErrorMessages)
  }

  const submitSummary = (event) => {
    event.preventDefault();
    console.log("Summary submitted");
    dispatch({
      type: "POST_INCIDENT",
      payload: {
        incidentMirror: incidentMirror,
        patientsMirror: patientsMirror,
        treatmentMirror: treatmentMirror,
        vitalsMirror: vitalsMirror,
      },
    });
  };
  return (
    <div>
      {incidentMirror && (
        <div>
          <TimestampButton
            incidentMirror={incidentMirror}
            setIncidentMirror={setIncidentMirror}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Incident Summary"
            variant="outlined"
            value={incidentMirror.incidentSummary}
            onChange={(event) =>
              submitValue({
                key: `incidentSummary`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <Button color="primary" variant="contained" disabled={!allowSubmission} onClick={submitSummary}>
            Submit Summary
          </Button>
          <p>{JSON.stringify(errorMessages)}</p>
          {/* <button onClick={checkInputs}>CHECK</button> */}
        </div>
      )}
    </div>
  );
}
export default SummaryFieldSubmit;