import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStyles from "./Styles";
//Material UI imports
import { InputLabel, MenuItem, Select, TextField, Container } from "@material-ui/core";

const IncidentFormResponse = ({ localIncident, setLocalIncident }) => {
  const dropdowns = useSelector((store) => store.dropdowns);
  const classes = useStyles();
  
  // Only handles when a value is changed by keystroke/inputfield clicks.
  // Does NOT handle initialization of new data.
  function submitValue(newParameter) {
    setLocalIncident({
      ...localIncident,
      [newParameter.key]: newParameter.thing,
    });
  }

  return (
    <Container>
    <div className="container">
      {localIncident && (
        // CREW ID textfield
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
        {/* Triage Category dropdown */}
      {dropdowns.go && localIncident && (
        <div>
          <InputLabel id="demo-simple-select-autowidth-label">
            Triage Category
          </InputLabel>
          <Select
             defaultValue=""
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={localIncident[`triageCat`]}
            onChange={(event) =>
              submitValue({ key: `triageCat`, thing: event.target.value })
            }
          >
            {dropdowns["triage_cat"].map((item) => (
              <MenuItem key={"triage_cat" + item.id} value={item.id} classes={{root: classes.menuItem}}>
                {item["triage_cat_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <br />
          {/* Type of Service Requested dropdown  */}
          <InputLabel id="demo-simple-select-autowidth-label">
            Type of Service Requested
          </InputLabel>
          <Select
            defaultValue=""
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={localIncident[`incidentService`]}
            onChange={(event) =>
              submitValue({ key: `incidentService`, thing: event.target.value })
            }
          >
            {dropdowns["incident_service"].map((item) => (
              <MenuItem key={"incident_service" + item.id} value={item.id} classes={{root: classes.menuItem}}>
                {item["incident_service_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
        </div>
      )}
    </div>
    </Container>
  );
};

export default IncidentFormResponse;
