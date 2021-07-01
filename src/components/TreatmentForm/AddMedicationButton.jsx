import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Button } from "@material-ui/core";

function AddMedicationButton({ treatmentMirror, setTreatmentMirror }) {
  const treatment = useSelector((store) => store.treatment);

  // router/redux
  const history = useHistory();
  const { id } = useParams();

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
      console.log("new medication ID", id, treatmentMirror);

      const timestamp = Date.now();




      setTreatmentMirror({
        ...treatmentMirror,

        [id + "medicationTimestamp" + treatmentMirror[`${id}medicationArray`].length]:
          new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),

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
            Add Medication
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddMedicationButton;
