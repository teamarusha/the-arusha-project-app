import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import { Button, MenuItem, TextField } from "@material-ui/core";

const TreatmentProcedureForm = ({
  localTreatment,
  setLocalTreatment,
  render,
}) => {
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);

  // Runs whenever localPatientMirror is changed, updated, manipulated at all
  // This way they will always be the same as long as it is the mirror that is being changed
  useEffect(() => {
    console.log("UPDATING browser storage", localTreatment);
    localStorage.setItem("treatment", JSON.stringify(localTreatment));
  }, [localTreatment]);

  // Only handles when a value is changed by keystroke/inputfield clicks.
  // Does NOT handle initialization of new data.
  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setLocalTreatment({
      ...localTreatment,
      [newParameter.key]: newParameter.thing,
    });

    // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
  }

  return (
    <div>
      {render && (
        <div>
          {dropdowns.go && (
            <div>
              <TextField
                id="outlined-basic"
                select
                label="Procedure Type"
                variant="outlined"
                value={localTreatment[`procedure`]}
                onChange={(event) =>
                  submitValue({
                    key: `procedure`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["procedure_list"].map((item) => (
                  <MenuItem key={"procedure_list" + item.id} value={item.id}>
                    {item["procedure_list_type"]}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                select
                label="Number of Procedure Attempts"
                variant="outlined"
                value={localTreatment[`procedureAttempts`]}
                onChange={(event) =>
                  submitValue({
                    key: `procedureAttempts`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["procedures_attempted"].map((item) => (
                  <MenuItem
                    key={"procedures_attempted" + item.id}
                    value={item.id}
                  >
                    {item["procedures_attempted_type"]}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                select
                label="Procedure Successful"
                variant="outlined"
                value={localTreatment[`successfulProcedure`]}
                onChange={(event) =>
                  submitValue({
                    key: `successfulProcedure`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["procedure_successful"].map((item) => (
                  <MenuItem
                    key={"procedure_successful" + item.id}
                    value={item.id}
                  >
                    {item["procedure_successful_type"]}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                select
                label="Response to Procedure"
                variant="outlined"
                value={localTreatment[`responseToProcedure`]}
                onChange={(event) =>
                  submitValue({
                    key: `responseToProcedure`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["procedure_response"].map((item) => (
                  <MenuItem
                    key={"procedure_response" + item.id}
                    value={item.id}
                  >
                    {item["procedure_response_type"]}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                select
                label="Role/Type of Person Performing
                Procedure"
                variant="outlined"
                value={localTreatment[`procedurePerformedBy`]}
                onChange={(event) =>
                  submitValue({
                    key: `procedurePerformedBy`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["procedure_performer"].map((item) => (
                  <MenuItem
                    key={"procedure_performer" + item.id}
                    value={item.id}
                  >
                    {item["procedure_performer_type"]}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TreatmentProcedureForm;
