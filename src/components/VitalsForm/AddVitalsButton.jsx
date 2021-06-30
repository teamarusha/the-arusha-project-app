import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Material UI Imports
import { Button } from "@material-ui/core";

function AddVitalsButton({ vitalsMirror, setVitalsMirror }) {
  const vitals = useSelector((store) => store.vitals);

  // router/redux
  const { id } = useParams();

  function AddVitals() {
    // newProcedureID will be the next procedure added. Does not use params from the url
    // Instead it looks at the ProcedureArray and adds the next procedure based on that
    // THIS ID IS NOT THE Procedure ID FROM THE DATABASE,
    // THIS VALUE MEANS NOTHING AFTER SUBMISSION
    let newVitalsID = vitalsMirror[`${id}vitalsArray`].length + 1;
    console.log("new vitals ID", newVitalsID);

    setVitalsMirror({
      ...vitalsMirror,
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
    });
  }

  return (
    <div>
      {vitalsMirror && (
        <div>
          <p>Submit Vitals</p>
          <Button onClick={AddVitals}>Add Vitals</Button>
        </div>
      )}
    </div>
  );
}

export default AddVitalsButton;
