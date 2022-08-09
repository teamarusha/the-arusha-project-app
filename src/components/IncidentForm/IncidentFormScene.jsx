import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStyles from "./Styles";
//Material UI imports
import { InputLabel, MenuItem, Select, TextField, Container } from "@material-ui/core";

const IncidentFormScene = ({ localIncident, setLocalIncident }) => {
  const classes = useStyles();
  const dropdowns = useSelector((store) => store.dropdowns);

  // useEffect(() => {
  //   if(localIncident.incidentCity === ""){
  //     noEntry();
  //   }
  // }, [])

  function submitValue(newParameter) {
    setLocalIncident({
      ...localIncident,
      [newParameter.key]: newParameter.thing,
    });

  }

  // function noEntry(){
  //   console.log('in notValid')
  //   if(localIncident.incidentCity === ""){
  //     return true
  //   }
  //   return false
  // }

  return (
    <Container>
      <div className="container">
        {localIncident && (
          <div>
            {/* number of patients textfield */}
            <TextField
              id="outlined-basic"
              label="# of Patients"
              variant="outlined"
              error={localIncident.patientNumbers === ""}
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
            {/* incident city textfield */}
            <TextField
              error={localIncident.incidentCity === ""}
              id="outlined-basic"
              label="Incident City"
              variant="outlined"
              value={localIncident[`incidentCity`]}
              onChange={(event) =>
                submitValue({ key: `incidentCity`, thing: event.target.value })
              }
            ></TextField>
            <br />
            <br />
            {/* incident region textfield */}
            <TextField
              id="outlined-basic"
              label="Incident Region"
              variant="outlined"
              error={localIncident.incidentRegion === ""}
              value={localIncident[`incidentRegion`]}
              onChange={(event) =>
                submitValue({ key: `incidentRegion`, thing: event.target.value })
              }
            ></TextField>
            <br />
            <br />
            <br />

          </div>
        )}
        {/* possible injury dropdown menu */}
        {dropdowns.go && localIncident && (
          <div>
            <InputLabel id="demo-simple-select-autowidth-label">
              Possible Injury
          </InputLabel>
            <Select
              defaultValue=""
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              error={localIncident.possibleInjury === ""}
              value={localIncident[`possibleInjury`]}
              onChange={(event) =>
                submitValue({ key: `possibleInjury`, thing: event.target.value })
              }
            >
              {dropdowns["possible_injury"].map((item) => (
                <MenuItem key={"possible_injury" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                  {item["possible_injury_type"]}
                </MenuItem>
              ))}
            </Select>
            <br />
            <br />
            <br />
            {/* alcohol/drug drop down menu */}
            <InputLabel id="demo-simple-select-autowidth-label">
              Alcohol and Drug Use Indicators
          </InputLabel>

            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              defaultValue={""}
              error={localIncident.alcoholDrugIndicators === ""}
              value={localIncident[`alcoholDrugIndicators`]}
              onChange={(event) =>
                submitValue({
                  key: `alcoholDrugIndicators`,
                  thing: event.target.value,
                })
              }
            >
              {dropdowns["alcohol_drug_use"].map((item) => (
                <MenuItem key={"alcohol_drug_use" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
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
