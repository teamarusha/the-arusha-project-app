import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// ----- Material UI -----
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

import useStyles from "../TreatmentForm/Styles";

function PatientInjury({ patientsMirror, setPatientsMirror }) {
  // DECLARE VARIABLES FOR USE OF FUNCTIONS
  const classes = useStyles();
  const { id } = useParams();
  // GRAB DROPDOWNS STORED IN REDUCER
  const dropdowns = useSelector((store) => store.dropdowns);


  function submitValue(newParameter) {
    setPatientsMirror({
      ...patientsMirror,
      [newParameter.key]: newParameter.thing,
    });
  }

  return (

    <div className="container">
      {/* OPTIONAL DROPDOWN - TYPE OF INJURY */}
      {dropdowns.go && patientsMirror && (
        <div>
          <InputLabel id="demo-simple-select-autowidth-label">
            Type of Injury
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}injuryLocation`]}
            error={patientsMirror[`${id}injuryLocation`] === ''}
            onChange={(event) =>
              submitValue({
                key: `${id}injuryLocation`,
                thing: event.target.value,
              })
            }
          >
            {dropdowns["injury_location"].map((item) => (
              <MenuItem key={"injury_location" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                {item[`injury_location_type`]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <br />

          {/* OPTIONAL DROPDOWN - CAUSE OF INJURY */}
          <InputLabel id="demo-simple-select-autowidth-label">
            Cause of Injury
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}injuryCause`]}
            error={patientsMirror[`${id}injuryCause`] === ''}
            onChange={(event) =>
              submitValue({
                key: `${id}injuryCause`,
                thing: event.target.value,
              })
            }
          >
            {dropdowns["injury_cause"].map((item) => (
              <MenuItem key={"injury_cause" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                {item[`injury_cause_type`]}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
    </div>
  );
}

export default PatientInjury;
