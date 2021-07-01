import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// ---- Material UI ----
import { TextField } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { useParams } from "react-router-dom";

function PatientDemographics({ patientsMirror, setPatientsMirror }) {
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
          <InputLabel id="demo-simple-select-autowidth-label">
            Gender
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            value={patientsMirror[`${id}patientGender`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientGender`,
                thing: event.target.value,
              })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["gender"].map((item) => (
              <MenuItem key={"gender" + item.id} value={item.id}>
                {item[`gender_type`]}
              </MenuItem>
            ))}
            {/* <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                    <MenuItem value={30}>Other</MenuItem> */}
          </Select>{" "}
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">Race</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            value={patientsMirror[`${id}patientRace`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientRace`,
                thing: event.target.value,
              })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["race"].map((item) => (
              <MenuItem key={"race" + item.id} value={item.id}>
                {item[`race_type`]}
              </MenuItem>
            ))}
            {/* <MenuItem value={10}>African</MenuItem>
                    <MenuItem value={20}>African-American</MenuItem>
                    <MenuItem value={30}>American Indian</MenuItem> */}
          </Select>{" "}
          <br />
          <br />
          <p>Date of Birth calendar goes here</p>
          <TextField
            id="outlined-basic"
            label="Patient Address"
            variant="outlined"
            value={patientsMirror[`${id}patientAdress`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientAdress`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <TextField
            id="outlined-basic"
            label="State of Residence"
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
            label="County of Residence"
            variant="outlined"
            value={patientsMirror[`${id}patientHomeCounty`]}
            onChange={(event) =>
              submitValue({
                key: `${id}patientHomeCounty`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Residence ZIP Code"
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
