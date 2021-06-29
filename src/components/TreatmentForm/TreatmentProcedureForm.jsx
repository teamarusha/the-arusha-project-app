import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Material UI imports
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

const TreatmentProcedureForm = ({ localTreatment, setLocalTreatment }) => {
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
    <div className="container">
      <h2>Procedure Form</h2>
      <br />
      <br />

      {localTreatment && (
        <div>
          {dropdowns.go && (
            <div>
              <InputLabel id="demo-simple-select-autowidth-label">
                Procedure Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["procedure_list"].map((item) => (
                  <MenuItem key={"procedure_list" + item.id} value={item.id}>
                    {item["procedure_list_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-select-autowidth-label">
                Number of Procedure Attempts
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                {dropdowns["procedures_attempted"].map((item) => (
                  <MenuItem
                    key={"procedures_attempted" + item.id}
                    value={item.id}
                  >
                    {item["procedures_attempted_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-select-autowidth-label">
                Procedure Successful
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                {dropdowns["procedure_successful"].map((item) => (
                  <MenuItem
                    key={"procedure_successful" + item.id}
                    value={item.id}
                  >
                    {item["procedure_successful_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-select-autowidth-label">
                Response to Procedure
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                {dropdowns["procedure_response"].map((item) => (
                  <MenuItem
                    key={"procedure_response" + item.id}
                    value={item.id}
                  >
                    {item["procedure_response_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-select-autowidth-label">
                Role/Type of Person Performing Procedure
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                {dropdowns["procedure_performer"].map((item) => (
                  <MenuItem
                    key={"procedure_performer" + item.id}
                    value={item.id}
                  >
                    {item["procedure_performer_type"]}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TreatmentProcedureForm;
