import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AddMedicationButton from "./AddMedicationButton";

//Material UI imports
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

const TreatmentMedsForm = ({ localTreatment, setLocalTreatment }) => {
  const dropdowns = useSelector((store) => store.dropdowns);
  const { id } = useParams;

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
  }

  return (
    <div className="container">
      {localTreatment && (
        <div>
          <AddMedicationButton
            treatmentMirror={localTreatment}
            setTreatmentMirror={setLocalTreatment}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Medication Administered"
            variant="outlined"
            value={
              localTreatment[
                `${id}medication${localTreatment[`${id}lastMedication`]}`
              ]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}medication${localTreatment[`${id}lastMedication`]}`,
                thing: event.target.value,
              })
            }
          ></TextField>
          &nbsp;
          <br />
          <br />
          {dropdowns.go && localTreatment && (
            <div>
              <InputLabel id="demo-simple-select-autowidth-label">
                Administered Route
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                value={
                  localTreatment[
                    `${id}medsAdminBy${localTreatment[`${id}lastMedication`]}`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}medsAdminBy${
                      localTreatment[`${id}lastMedication`]
                    }`,
                    thing: event.target.value,
                  })
                }
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
                value={
                  localTreatment[
                    `${id}dosage${localTreatment[`${id}lastMedication`]}`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}dosage${localTreatment[`${id}lastMedication`]}`,
                    thing: event.target.value,
                  })
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
                value={
                  localTreatment[
                    `${id}units${localTreatment[`${id}lastMedication`]}`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}units${localTreatment[`${id}lastMedication`]}`,
                    thing: event.target.value,
                  })
                }
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
                value={
                  localTreatment[
                    `${id}responseToProcedure${
                      localTreatment[`${id}lastMedication`]
                    }`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}responseToProcedure${
                      localTreatment[`${id}lastMedication`]
                    }`,
                    thing: event.target.value,
                  })
                }
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
                value={
                  localTreatment[
                    `${id}procedurePerformedBy${
                      localTreatment[`${id}lastMedication`]
                    }`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}procedurePerformedBy${
                      localTreatment[`${id}lastMedication`]
                    }`,
                    thing: event.target.value,
                  })
                }
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
