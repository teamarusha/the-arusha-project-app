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
  const [allowSubmission, setAllowSubmission] = useState(false);

  useEffect(() => {
    checkInputs();
  }, [])

  function checkInputs() {

    let incidentError = false;
    let patientError = false;

    let transdispError = false;

    // The whole check will loop through this array to determine where any incompletes are
    let patientsArray = patientsMirror.patientsArray;

    for (let patient of patientsArray) {
      // Loop through a patient's incident inputs
      let incidentErrorMessage = `Missing input from incident form for patient ${patient}`;
      let patientErrorMessage = `Missing input from patient form for patient ${patient}`;

      for (let key in incidentMirror) {
        console.log('key', key, 'value', incidentMirror[key]);

        if (key === `${patient}transportDisposition`) {
          if (incidentMirror[key] == 0) {
            // error
          } else if (incidentMirror[key] > 4) {
            // no error
          } else {
            // no error yet
          }

        } else if (
          key === `${patient}destinationCounty` ||
          key === `${patient}destinationFacility` ||
          key === `${patient}destinationState` ||
          key === `${patient}destinationZipCode` ||
          key === `${patient}transportDisposition` ||
          key === `${patient}transportMethod` ||
          key === `${patient}transportMode`
        ) {

        } else {
          
        }
      }

      for (let key in patientsMirror) {
        console.log('key', key, 'value', incidentMirror[key]);

        if (patientsMirror[key] === "") {
          if (key !== 1) {


          }
        }
      }






      let tranDis = incidentMirror[patient + 'transportDisposition']

      // let dispositionArray = incidentMirror[patient + 'dispositionArray'];
      // let medicationArray = treatmentMirror[patient + 'medicationArray'];
      // let procedureArray = treatmentMirror[patient + 'procedureArray'];
      // let vitalsArray = treatmentMirror[patient + 'procedureArray'];

      let cardArr = patientsMirror[patient + 'cardiacArrest'] // Must be > 1

      // let medications = patientsMirror[patient + 'patientCurrMedications']
      // let allergies = patientsMirror[patient + 'patientAllergies']
      // let conditions = patientsMirror[patient + 'patientMedConditions']
    }




    // for (let key in incidentMirror) {
    //   console.log('key', key, 'value', incidentMirror[key]);
    //   if (incidentMirror[key] === "") {
    //     if (key !== 1) {
    //       incompleteCount++;
    //       incompleteInputs.push(key)
    //     }
    //   }
    // }
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
          <Button color="primary" variant="contained" onClick={submitSummary}>
            Submit Summary
          </Button>
          <button onClick={checkInputs}>CHECK</button>
        </div>
      )}
    </div>
  );
}
export default SummaryFieldSubmit;