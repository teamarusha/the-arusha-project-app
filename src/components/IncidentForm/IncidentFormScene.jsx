import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStyles from "./Styles";
//Material UI imports
import { InputLabel, MenuItem, Select, TextField, Container} from "@material-ui/core";

const IncidentFormScene = ({ localIncident, setLocalIncident }) => {
  const classes = useStyles();
  const dropdowns = useSelector((store) => store.dropdowns);

  // useEffect(() => {
  //   console.log("UPDATING browser storage", localIncident);
  //   localStorage.setItem("incident", JSON.stringify(localIncident));
  // }, [localIncident]);

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
    <Container>
    <div className="container">
      {localIncident && (
        <div>
          <TextField
            id="outlined-basic"
            label="# of Patients"
            variant="outlined"
            value={localIncident[`patientNumbers`]}
            onChange={(event) =>
              submitValue({
                key: `patientNumbers`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Incident State"
            variant="outlined"
            value={localIncident[`incidentState`]}
            onChange={(event) =>
              submitValue({ key: `incidentState`, thing: event.target.value })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Incident County"
            variant="outlined"
            value={localIncident[`incidentCounty`]}
            onChange={(event) =>
              submitValue({ key: `incidentCounty`, thing: event.target.value })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Incident Zip Code"
            variant="outlined"
            value={localIncident[`incidentZipCode`]}
            onChange={(event) =>
              submitValue({
                key: `incidentZipCode`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <br />

        </div>
      )}
      {dropdowns.go && localIncident && (
        <div>
          <InputLabel id="demo-simple-select-autowidth-label">
            Possible Injury
          </InputLabel>
          <Select
            
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={localIncident[`possibleInjury`]}
            onChange={(event) =>
              submitValue({ key: `possibleInjury`, thing: event.target.value })
            }
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {dropdowns["possible_injury"].map((item) => (
              <MenuItem key={"possible_injury" + item.id} value={item.id} classes={{root: classes.menuItem}}>
                {item["possible_injury_type"]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <br />

          <InputLabel id="demo-simple-select-autowidth-label">
            Alcohol and Drug Use Indicators
          </InputLabel>

          <Select
            
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={localIncident[`alcoholDrugIndicators`]}
            onChange={(event) =>
              submitValue({
                key: `alcoholDrugIndicators`,
                thing: event.target.value,
              })
            }
          >

            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}

            {dropdowns["alcohol_drug_use"].map((item) => (
              <MenuItem key={"alcohol_drug_use" + item.id} value={item.id} classes={{root: classes.menuItem}}>
                {item["alcohol_drug_use_type"]}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
    </div>
    </Container>
  );
};

export default IncidentFormScene;
