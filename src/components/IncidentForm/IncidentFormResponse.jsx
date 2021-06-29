import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Material UI imports
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { ExpandMoreIcon } from "@material-ui/icons/ExpandMore";

import useStyles from "./Styles";

const IncidentFormResponse = ({ localIncident, setLocalIncident, render }) => {
  const dropdowns = useSelector((store) => store.dropdowns);

  useEffect(() => {
    console.log("UPDATING browser storage", localIncident);
    localStorage.setItem("incident", JSON.stringify(localIncident));
  }, [localIncident]);

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

  let [localDropdownMirror, setLocalDropdownMirror] = useState(
    JSON.parse(localStorage.getItem("dropdowns"))
  );

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("dropdowns")) === null) {
      dispatch({ type: "GET_DROPDOWNS" });
    } else {
      dispatch({ type: "SET_DROPDOWNS", payload: localDropdownMirror });
    }
  }, []);

  useEffect(() => {
    if (dropdowns.go === true) {
      localStorage.setItem("dropdowns", JSON.stringify(dropdowns));
    }
  }, [dropdowns.go]);

  return (
    <div className="container">
      <h2>Incident Response Form</h2>
      <br />
      <br />
      {render && (
        <TextField
          id="outlined-basic"
          label="Crew Id"
          variant="outlined"
          value={localIncident[`crew`]}
          onChange={(event) =>
            submitValue({ key: `crew`, thing: event.target.value })
          }
        ></TextField>
      )}

      {dropdowns.go && render && (
        <div>
          <InputLabel id="demo-simple-select-autowidth-label">
            Triage Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["triage_cat"].map((item) => (
              <MenuItem key={"triage_cat" + item.id} value={item.id}>
                {item["triage_cat_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            Type of Service Requested
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["incident_service"].map((item) => (
              <MenuItem key={"incident_service" + item.id} value={item.id}>
                {item["incident_service_type"]}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
    </div>
  );
};

export default IncidentFormResponse;
