import React from "react";
import { useParams } from "react-router-dom";
import moment from 'moment';

//Material UI Imports
import { Button } from "@material-ui/core";

function AddVitalsButton({ vitalsMirror, setVitalsMirror }) {
  // const vitals = useSelector((store) => store.vitals);

  // router/redux
  const { id } = useParams();

  let number = vitalsMirror[`${id}vitalsArray`].length;

  function AddVitals() {
    // newProcedureID will be the next procedure added. Does not use params from the url
    // Instead it looks at the ProcedureArray and adds the next procedure based on that
    // THIS ID IS NOT THE Procedure ID FROM THE DATABASE,
    // THIS VALUE MEANS NOTHING AFTER SUBMISSION
    const timestamp = moment();

    let newVitalsID = vitalsMirror[`${id}vitalsArray`].length + 1;

    setVitalsMirror({
      ...vitalsMirror,

      [id + "vitalTimestamp" + vitalsMirror[`${id}vitalsArray`].length]: timestamp,

      [id + "lastVital"]: newVitalsID,
      [id + "vitalsArray"]: [...vitalsMirror[`${id}vitalsArray`], newVitalsID],
      [id + "systolicBloodPressure" + newVitalsID]: "",
      [id + "heartRate" + newVitalsID]: "",
      [id + "pulseOximetry" + newVitalsID]: "",
      [id + "respiratoryRate" + newVitalsID]: "",
      [id + "bloodGlucoseLevel" + newVitalsID]: "",
      [id + "glasgowComaScoreEye" + newVitalsID]: "",
      [id + "glasgowComaScoreVerbal" + newVitalsID]: "",
      [id + "glasgowComaScoreMotor" + newVitalsID]: "",
      [id + "glasgowComaScoreQualifier" + newVitalsID]: "",
      [id + "painScaleScore" + newVitalsID]: "",
      [id + "strokeScaleScore" + newVitalsID]: "",
      [id + "strokeScaleType" + newVitalsID]: "",
      [id + "vitalTimestamp" + newVitalsID]: "",
    });
  }

  return (
    <div>
      {vitalsMirror && (
        <div>
          <Button color="primary" variant="contained" onClick={AddVitals}>
            Submit Vitals {number}
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddVitalsButton;
