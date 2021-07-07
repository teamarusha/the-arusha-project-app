import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//Material UI Imports
import { Button } from "@material-ui/core";

function AddProcedureButton({ treatmentMirror, setTreatmentMirror }) {
  // const treatment = useSelector((store) => store.treatment);

  // router/redux
  const history = useHistory();
  const { id } = useParams();

  function AddProcedure() {

    if (
      treatmentMirror[`${id}procedure${treatmentMirror[`${id}lastProcedure`]}`] === "" ||
      treatmentMirror[`${id}procedureAttempts${treatmentMirror[`${id}lastProcedure`]}`] === "" ||
      treatmentMirror[`${id}successfulProcedure${treatmentMirror[`${id}lastProcedure`]}`] === "" ||
      treatmentMirror[`${id}responseToProcedure${treatmentMirror[`${id}lastProcedure`]}`] === "" ||
      treatmentMirror[`${id}procedurePerformedBy${treatmentMirror[`${id}lastProcedure`]}`] === ""
    ) {
      alert('Please fill all Procedure Form inputs before submitting')

    } else {


      // newProcedureID will be the next procedure added. Does not use params from the url
      // Instead it looks at the ProcedureArray and adds the next procedure based on that
      // THIS ID IS NOT THE Procedure ID FROM THE DATABASE,
      // THIS VALUE MEANS NOTHING AFTER SUBMISSION
      let newProcedureID = treatmentMirror[`${id}lastProcedure`] + 1;
      console.log("new procedure ID", newProcedureID);

      const timestamp = Date.now();

      


      setTreatmentMirror({
        ...treatmentMirror,

        [id + "procedureTimestamp" + treatmentMirror[`${id}procedureArray`].length]:
          new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),

        [id + "lastProcedure"]: newProcedureID,
        [id + "procedureArray"]: [
          ...treatmentMirror[`${id}procedureArray`],
          newProcedureID,
        ],
        [id + "procedure" + newProcedureID]: "",
        [id + "procedureAttempts" + newProcedureID]: "",
        [id + "successfulProcedure" + newProcedureID]: "",
        [id + "responseToProcedure" + newProcedureID]: "",
        [id + "procedurePerformedBy" + newProcedureID]: "",
      });
    }
  }

  return (
    <div>
      {treatmentMirror && (
        <div>
          <Button color="primary" variant="contained" onClick={AddProcedure}>
            Add Procedure
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddProcedureButton;
