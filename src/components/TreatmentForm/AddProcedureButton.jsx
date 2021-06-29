import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function AddProcedure(treatmentMirror, setTreatmentMirror) {
  const treatment = useSelector((store) => store.treatment);

  // router/redux
  const history = useHistory();
  const { id } = useParams();

  // newProcedureID will be the next procedure added. Does not use params from the url
  // Instead it looks at the ProcedureArray and adds the next procedure based on that
  // THIS ID IS NOT THE Procedure ID FROM THE DATABASE,
  // THIS VALUE MEANS NOTHING AFTER SUBMISSION
  let newProcedureID = treatmentMirror.ProcedureArray.length + 1;
  console.log("new procedure ID", newProcedureID);

  setTreatmentMirror({
    ...treatmentMirror,
    [newPatientID + "procedure1"]: "",
    [newPatientID + "procedureAttempts1"]: "",
    [newPatientID + "successfulProcedure1"]: "",
    [newPatientID + "responseToProcedure1"]: "",
    [newPatientID + "procedurePerformedBy1"]: "",
  });

  // Simply redirects to the patient page of a new patient
  // based on their position in the patientArray
  function changePatient(patientNumber) {
    history.push(`/${formName}/${patientNumber}`);
  }

  return (
    <div>
      {treatmentMirror && (
        <div>
          {treatmentMirror &&
            treatmentMirror.procedureArray.map((value) => (
              <button
                key={`${value}changePatient`}
                disabled={id == value}
                onClick={() => changePatient(value)}
              >
                Edit Procedure {value}
              </button>
            ))}
          <br />
          <p>Add another Procedure</p>
          <button onClick={AddMedication}>Add Procedure</button>
        </div>
      )}
    </div>
  );
}
