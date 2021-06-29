import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Material UI imports
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

const TreatmentMedsForm = ({ localTreatment, setLocalTreatment, render }) => {
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
      <h2>Medication Form</h2>
      <br />
      <br />

      {render && (
        <div>
          <TextField
            id="outlined-basic"
            label="Medication Administered"
            variant="outlined"
            value={localTreatment[`medication`]}
            onChange={(event) =>
              submitValue({ key: `medication`, thing: event.target.value })
            }
          ></TextField>
          &nbsp;
          <br />
          <br />
          {dropdowns.go && render && (
            <div>
              <InputLabel id="demo-simple-select-autowidth-label">
                Administered Route
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["med_admin_route"].map((item) => (
                  <MenuItem key={"med_admin_route" + item.id} value={item.id}>
                    {item["med_admin_route_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Dosage"
                variant="outlined"
                value={localTreatment[`dosage`]}
                onChange={(event) =>
                  submitValue({ key: `dosage`, thing: event.target.value })
                }
              ></TextField>
              <br />
              <br />
              <InputLabel id="demo-simple-select-autowidth-label">
                Dosage Units
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["med_dosage_units"].map((item) => (
                  <MenuItem key={"med_dosage_units" + item.id} value={item.id}>
                    {item["med_dosage_units_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-autowidth-label">
                Response to Medication
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["med_response"].map((item) => (
                  <MenuItem key={"med_response" + item.id} value={item.id}>
                    {item["med_response_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-autowidth-label">
                Role/Type of Person Administering Medication
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["med_admin_by"].map((item) => (
                  <MenuItem key={"med_admin_by" + item.id} value={item.id}>
                    {item["med_admin_by_type"]}
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

export default TreatmentMedsForm;
