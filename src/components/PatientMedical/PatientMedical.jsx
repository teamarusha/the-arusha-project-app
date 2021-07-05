import React from "react";

// ----- Material UI -----
import { TextField, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PatientMedical({ patientsMirror, setPatientsMirror }) {
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);
  const { id } = useParams();

  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setPatientsMirror({
      ...patientsMirror,
      [newParameter.key]: newParameter.thing,
    });
  }

  return (
    <div className="container">
      
      {patientsMirror && (
        <div>
           <Typography>If none apply, please type "None"</Typography>
           <br />

          <TextField
            id="outlined-basic"
            label="Allergies"
            multiline
            rows={3}
            fullWidth
            variant="outlined"
            value={patientsMirror[`${id}patientAllergies`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientAllergies`,
                thing: event.target.value,
              })
            }
          ></TextField>{" "}
          &nbsp; <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Current Medications"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={patientsMirror[`${id}patientCurrMedications`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientCurrMedications`,
                thing: event.target.value,
              })
            }
          ></TextField>{" "}
          &nbsp; <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Previous Medical Conditions"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={patientsMirror[`${id}patientMedConditions`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientMedConditions`,
                thing: event.target.value,
              })
            }
          ></TextField>
         
        </div>
      )}
    </div>
  );
}

export default PatientMedical;
