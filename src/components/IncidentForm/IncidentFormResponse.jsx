import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Material UI imports
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

const IncidentFormResponse = ({ localIncident, setLocalIncident }) => {
  const dropdowns = useSelector((store) => store.dropdowns);

  // useEffect(() => {
  //   console.log("UPDATING browser storage", localIncident);
  //   localStorage.setItem("incident", JSON.stringify(localIncident));
  // }, [localIncident]);

  // Only handles when a value is changed by keystroke/inputfield clicks.
  // Does NOT handle initialization of new data.
  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setLocalIncident({
      ...localIncident,
      [newParameter.key]: newParameter.thing,
    });
  }

  return (
    <div className="container">
      {localIncident && (
        <TextField
          id="outlined-basic"
          label="Crew ID"
          variant="outlined"
          value={localIncident[`crew`]}
          onChange={(event) =>
            submitValue({ key: `crew`, thing: event.target.value })
          }
        ></TextField>
      )}
        <br />
        <br />
        <br />
      {dropdowns.go && localIncident && (
        <div>
          <InputLabel id="demo-simple-select-autowidth-label">
            Triage Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={localIncident[`triageCat`]}
            onChange={(event) =>
              submitValue({ key: `triageCat`, thing: event.target.value })
            }
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}

      
            {dropdowns["triage_cat"].map((item) => (
              <MenuItem key={"triage_cat" + item.id} value={item.id}>
                {item["triage_cat_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            Type of Service Requested
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={localIncident[`incidentService`]}
            onChange={(event) =>
              submitValue({ key: `incidentService`, thing: event.target.value })
            }
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {dropdowns["incident_service"].map((item) => (
              <MenuItem key={"incident_service" + item.id} value={item.id}>
                {item["incident_service_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default IncidentFormResponse;
