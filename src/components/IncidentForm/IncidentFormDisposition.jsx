import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Material UI imports
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

const IncidentFormDisposition = ({
  localIncident,
  setLocalIncident,
  render,
}) => {
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

    // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
  }

  return (
    <div className="container">
      <h2>Disposition Form</h2>
      <br />
      <br />

      {render && (
        <div>
          <TextField
            id="outlined-basic"
            label="Destination State"
            variant="outlined"
            value={localIncident[`destinationState`]}
            onChange={(event) =>
              submitValue({
                key: `destinationState`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Destination County"
            variant="outlined"
            value={localIncident[`destinationCounty`]}
            onChange={(event) =>
              submitValue({
                key: `destinationCounty`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Destination Zip Code"
            variant="outlined"
            value={localIncident[`destinationZipCode`]}
            onChange={(event) =>
              submitValue({
                key: `destinationZipCode`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
        </div>
      )}

      {dropdowns.go && render && (
        <div>
          <InputLabel id="demo-simple-select-autowidth-label">
            Transportation Disposition
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["transport_disposition"].map((item) => (
              <MenuItem key={"transport_disposition" + item.id} value={item.id}>
                {item["transport_disposition_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            EMS Transport Method
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["transport_method"].map((item) => (
              <MenuItem key={"transport_method" + item.id} value={item.id}>
                {item["transport_method_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            Transport Mode From Scene
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["transport_mode"].map((item) => (
              <MenuItem key={"transport_mode" + item.id} value={item.id}>
                {item["transport_mode_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            Type of Destination
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["destination_facility"].map((item) => (
              <MenuItem key={"destination_facility" + item.id} value={item.id}>
                {item["destination_facility_type"]}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
    </div>
  );
};

export default IncidentFormDisposition;
