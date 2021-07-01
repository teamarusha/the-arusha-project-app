import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// ----- Material UI -----
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

function PatientInjury({ patientsMirror, setPatientsMirror }) {
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
      {dropdowns.go && patientsMirror && (
        <div>
          <InputLabel id="demo-simple-select-autowidth-label">
            Cause of Injury
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            value={patientsMirror[`${id}injuryCause`]}
            onChange={(event) =>
              submitValue({
                key: `${id}injuryCause`,
                thing: event.target.value,
              })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["injury_cause"].map((item) => (
              <MenuItem key={"injury_cause" + item.id} value={item.id}>
                {item[`injury_cause_type`]}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />

          <InputLabel id="demo-simple-select-autowidth-label">
            Type of Injury
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            value={patientsMirror[`${id}injuryLocation`]}
            onChange={(event) =>
              submitValue({
                key: `${id}injuryLocation`,
                thing: event.target.value,
              })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["injury_location"].map((item) => (
              <MenuItem key={"injury_location" + item.id} value={item.id}>
                {item[`injury_location_type`]}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
    </div>
  );
}

export default PatientInjury;
