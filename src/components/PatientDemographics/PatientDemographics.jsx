import React from "react";
import { useSelector, useDispatch } from "react-redux";

// ---- Material UI ----
import { TextField } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useStyles from "../TreatmentForm/Styles";


function PatientDemographics({ patientsMirror, setPatientsMirror }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);
  const { id } = useParams();


  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setPatientsMirror({
      ...patientsMirror,
      [newParameter.key]: newParameter.thing,
    });
  }

  return (
    <div className="container">
      {patientsMirror && dropdowns.go && (
        <div>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={patientsMirror[`${id}patientFirstName`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientFirstName`,
                thing: event.target.value,
              })
            }
          ></TextField>{" "}
          &nbsp;
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={patientsMirror[`${id}patientLastName`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientLastName`,
                thing: event.target.value,
              })
            }
          ></TextField>{" "}
          <br />
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            Gender
          </InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}patientGender`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientGender`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns["gender"].map((item) => (
              <MenuItem key={"gender" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                {item[`gender_type`]}
              </MenuItem>
            ))}
          </Select>{" "}
          <br />
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">Race</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}patientRace`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientRace`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns["race"].map((item) => (
              <MenuItem key={"race" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                {item[`race_type`]}
              </MenuItem>
            ))}

          </Select>{" "}
          <br />
          <br />
          <br />
          <TextField
            id="date"
            label="DOB:"
            type="date"
            value={patientsMirror[`${id}patientDateOfBirth`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientDateOfBirth`,
                thing: event.target.value,
              })
            }
            // defaultValue="0000-00-00"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            value={patientsMirror[`${id}patientAge`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientAge`,
                thing: event.target.value,
              })
            }
          ></TextField>{" "}
          <br />
          <br />

          <InputLabel id="demo-simple-select-autowidth-label">Age Units</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}patientAgeUnits`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientAgeUnits`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns["age_units"].map((item) => (
              <MenuItem key={"age_units" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                {item[`age_units_type`]}
              </MenuItem>
            ))}
          </Select>{" "}
          <br />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Home Address"
            variant="outlined"
            value={patientsMirror[`${id}patientAddress`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientAddress`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            value={patientsMirror[`${id}patientHomeState`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientHomeState`,
                thing: event.target.value,
              })
            }
          ></TextField>{" "}
          &nbsp; <br />
          <br />
          <TextField
            id="outlined-basic"
            label="County"
            variant="outlined"
            value={patientsMirror[`${id}patientHomeCounty`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientHomeCounty`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Zip Code"
            variant="outlined"
            value={patientsMirror[`${id}patientHomeZip`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientHomeZip`,
                thing: event.target.value,
              })
            }
          ></TextField>
        </div>
      )}
    </div>
  );
}

export default PatientDemographics;
