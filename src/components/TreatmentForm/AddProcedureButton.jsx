import React from "react";
import moment from 'moment';
import { useParams } from "react-router-dom";

//Material UI Imports
import { Button } from "@material-ui/core";
import { number } from "prop-types";

function AddProcedureButton({ treatmentMirror, setTreatmentMirror }) {
  // const treatment = useSelector((store) => store.treatment);

  // router/redux
  const { id } = useParams();

  let number = 1;

  function AddProcedure() {

    console.log(number);

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

      const timestamp = moment();

      


      setTreatmentMirror({
        ...treatmentMirror,

        [id + "procedureTimestamp" + treatmentMirror[`${id}procedureArray`].length]: timestamp,
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
            Submit Procedure {number}
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddProcedureButton;
