import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function AddMedication(treatmentMirror, setTreatmentMirror) {
  const treatment = useSelector((store) => store.treatment);

  // router/redux
  const history = useHistory();
  const { id } = useParams();

  // newMedicationID will be the next medication added. Does not use params from the url
  // Instead it looks at the medicationArray and adds the next medication based on that
  // THIS ID IS NOT THE Medication ID FROM THE DATABASE,
  // THIS VALUE MEANS NOTHING AFTER SUBMISSION
  let newMedicationID = treatmentMirror.medicationArray.length + 1;
  console.log("new medication ID", newMedicationID);

  setTreatmentMirror({
    ...treatmentMirror,
    [newPatientID + "medicationArray"]: [1],
    [newPatientID + "medication1"]: "",
    [newPatientID + "routeAdministered1"]: "",
    [newPatientID + "dosage1"]: "",
    [newPatientID + "units1"]: "",
    [newPatientID + "medicationResponse1"]: "",
    [newPatientID + "medsAdminBy1"]: "",
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
            treatmentMirror.medicationArray.map((value) => (
              <button
                key={`${value}changePatient`}
                disabled={id == value}
                onClick={() => changePatient(value)}
              >
                Edit Medication {value}
              </button>
            ))}
          <br />
          <p>Add another Medication</p>
          <button onClick={AddMedication}>Add Medication</button>
        </div>
      )}
    </div>
  );
}

export default AddMedication;
