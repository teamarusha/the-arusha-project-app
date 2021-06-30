import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//Material UI Imports
import { Button } from "@material-ui/core";

function AddProcedureButton({ treatmentMirror, setTreatmentMirror }) {
  const treatment = useSelector((store) => store.treatment);

  // router/redux
  const history = useHistory();
  const { id } = useParams();

  function AddProcedure() {
    // newProcedureID will be the next procedure added. Does not use params from the url
    // Instead it looks at the ProcedureArray and adds the next procedure based on that
    // THIS ID IS NOT THE Procedure ID FROM THE DATABASE,
    // THIS VALUE MEANS NOTHING AFTER SUBMISSION
    let newProcedureID = treatmentMirror[`${id}procedureArray`].length + 1;
    console.log("new procedure ID", newProcedureID);

    setTreatmentMirror({
      ...treatmentMirror,
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

  return (
    <div>
      {treatmentMirror && (
        <div>
          <p>Submit Procedure</p>
          <Button onClick={AddProcedure}>Add Procedure</Button>
        </div>
      )}
    </div>
  );
}

export default AddProcedureButton;
