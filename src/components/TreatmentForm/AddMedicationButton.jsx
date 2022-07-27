import React from "react";
import { useParams } from "react-router-dom";
import moment from 'moment';
import { Button } from "@material-ui/core";

function AddMedicationButton({ treatmentMirror, setTreatmentMirror }) {
  // router/redux
  const { id } = useParams();

  let number = treatmentMirror[`${id}medicationArray`].length;

  function AddMedication() {

    if (
      treatmentMirror[`${id}medication${treatmentMirror[`${id}lastMedication`]}`] === "" ||
      treatmentMirror[`${id}routeAdministered${treatmentMirror[`${id}lastMedication`]}`] === "" ||
      treatmentMirror[`${id}dosage${treatmentMirror[`${id}lastMedication`]}`] === "" ||
      treatmentMirror[`${id}units${treatmentMirror[`${id}lastMedication`]}`] === "" ||
      treatmentMirror[`${id}medicationResponse${treatmentMirror[`${id}lastMedication`]}`] === "" ||
      treatmentMirror[`${id}medsAdminBy${treatmentMirror[`${id}lastMedication`]}`] === ""
    ) {
      alert('Please fill all Medication Form inputs before submitting')

    } else {

      // newMedicationID will be the next medication added. Does not use params from the url
      // Instead it looks at the medicationArray and adds the next medication based on that
      // THIS ID IS NOT THE Medication ID FROM THE DATABASE,
      // THIS VALUE MEANS NOTHING AFTER SUBMISSION
      let newMedicationID = treatmentMirror[`${id}medicationArray`].length + 1;

      const timestamp = moment();

      setTreatmentMirror({
        ...treatmentMirror,

        [id + "medicationTimestamp" + treatmentMirror[`${id}medicationArray`].length]: timestamp,
        [id + "lastMedication"]: newMedicationID,
        [id + "medicationArray"]: [
          ...treatmentMirror[`${id}medicationArray`],
          newMedicationID,
        ],
        [id + "medication" + newMedicationID]: "",
        [id + "routeAdministered" + newMedicationID]: "",
        [id + "dosage" + newMedicationID]: "",
        [id + "units" + newMedicationID]: "",
        [id + "medicationResponse" + newMedicationID]: "",
        [id + "medsAdminBy" + newMedicationID]: "",
      });
    }
  }

  return (
    <div>
      {treatmentMirror && (
        <div>
          <Button color="primary" variant="contained" onClick={AddMedication}>
            Submit Medication {number}
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddMedicationButton;
