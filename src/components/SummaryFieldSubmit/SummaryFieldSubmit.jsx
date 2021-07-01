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
          ></TextField>
          <br />
          <br />
          <Button color="primary" variant="contained" onClick={submitSummary}>
            Submit Summary
          </Button>
        </div>
      )}
    </div>
  );
}

export default SummaryFieldSubmit;
