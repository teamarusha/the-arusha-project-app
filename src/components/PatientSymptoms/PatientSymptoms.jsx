import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// ----- Material UI -----
import { TextField } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

function PatientSymptoms({ patientsMirror, setPatientsMirror }) {

    const dispatch = useDispatch();
    const dropdowns = useSelector((store) => store.dropdowns);
    const { id } = useParams();

    useEffect(() => {
        console.log("UPDATING patients browser storage", patientsMirror);
        localStorage.setItem("patients", JSON.stringify(patientsMirror));
    }, [patientsMirror]);

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
        <div>
        <div className="container">
            <h2>Patient Symptoms Form:</h2>
            <br /><br />

            {dropdowns.go && patientsMirror &&
                <div>
                    <InputLabel
                        id="demo-simple-select-autowidth-label">Chief Complaint Anatomic Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}anatomicLocation`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}anatomicLocation`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['anatomic_location'].map(item => <MenuItem key={'anatomic_location' + item.id}
                            value={item.id}>{item[`anatomic_location_type`]}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Chief Complaint Organ System</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}organSystem`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}organSystem`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['organ_system'].map(item => <MenuItem key={'organ_system' + item.id}
                            value={item.id}>{item[`organ_system_type`]}</MenuItem>)}
                    </Select> <br /><br />

                    {/* <p>Symptom Onset calendar goes here</p> <br /> */}
                    <TextField
                        id="date"
                        label="Symptom Onset"
                        type="date"
                        // defaultValue="0000-00-00"
                        // className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />&nbsp; &nbsp; <br /><br />
                    <label for="appt">Time:</label>
                    <input type="time" id="appt" name="appt"
                        min="09:00" max="18:00" required></input> <br /><br />

                    <TextField
                        id="outlined-basic"
                        label="Primary Symptom"
                        variant="outlined"
                        value={patientsMirror[`${id}primarySymptom`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}primarySymptom`,
                                thing: event.target.value,
                            })
                        }
                    >
                    </TextField> &nbsp;<br /><br />
                    <TextField
                        id="outlined-basic"
                        label="Other Associated Symptoms"
                        variant="outlined"
                        value={patientsMirror[`${id}otherSymptoms`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}otherSymptoms`,
                                thing: event.target.value,
                            })
                        }>
                    </TextField> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Initial Patient Aquity</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}initialAcuity`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}initialAcuity`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['initial_acuity'].map(item => <MenuItem key={'initial_acuity' + item.id}
                            value={item.id}>{item[`initial_acuity_type`]}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Provider's Primary Impression</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}primaryImpression`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}primaryImpression`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['primary_impression'].map(item => <MenuItem key={'primary_impression' + item.id}
                            value={item.id}>{item[`primary_impression_type`]}</MenuItem>)}
                    </Select> <br /><br />

                    {/* <p>Last Known Well calendar goes here</p> */}
                    <TextField
                        id="date"
                        label="Last Known Well:"
                        type="date"
                        // defaultValue="0000-00-00"
                        // className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />

                </div>
            }
          {/* > */}
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["anatomic_location"].map((item) => (
              <MenuItem key={"anatomic_location" + item.id} value={item.id}>
                {item[`anatomic_location_type`]}
              </MenuItem>
            ))}
          {/* </Select>{" "} */}
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            Chief Complaint Organ System
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            value={patientsMirror[`${id}organSystem`]}
            onChange={(event) =>
              submitValue({
                key: `${id}organSystem`,
                thing: event.target.value,
              })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["organ_system"].map((item) => (
              <MenuItem key={"organ_system" + item.id} value={item.id}>
                {item[`organ_system_type`]}
              </MenuItem>
            ))}
          </Select>{" "}
          <br />
          <br />
          <p>Symptom Onset calendar goes here</p> <br />
          <TextField
            id="outlined-basic"
            label="Primary Symptom"
            variant="outlined"
            value={patientsMirror[`${id}primarySymptom`]}
            onChange={(event) =>
              submitValue({
                key: `${id}primarySymptom`,
                thing: event.target.value,
              })
            }
          ></TextField>{" "}
          &nbsp;
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Other Associated Symptoms"
            variant="outlined"
            value={patientsMirror[`${id}otherSymptoms`]}
            onChange={(event) =>
              submitValue({
                key: `${id}otherSymptoms`,
                thing: event.target.value,
              })
            }
          ></TextField>{" "}
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            Initial Patient Aquity
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            value={patientsMirror[`${id}initialAcuity`]}
            onChange={(event) =>
              submitValue({
                key: `${id}initialAcuity`,
                thing: event.target.value,
              })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["initial_acuity"].map((item) => (
              <MenuItem key={"initial_acuity" + item.id} value={item.id}>
                {item[`initial_acuity_type`]}
              </MenuItem>
            ))}
          </Select>{" "}
          <br />
          <br />
          <InputLabel id="demo-simple-select-autowidth-label">
            Provider's Primary Impression
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            value={patientsMirror[`${id}primaryImpression`]}
            onChange={(event) =>
              submitValue({
                key: `${id}primaryImpression`,
                thing: event.target.value,
              })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropdowns["primary_impression"].map((item) => (
              <MenuItem key={"primary_impression" + item.id} value={item.id}>
                {item[`primary_impression_type`]}
              </MenuItem>
            ))}
          </Select>{" "}
          <br />
          <br />
          <p>Last Known Well calendar goes here</p>
        </div>
      {/* )} */}
    </div>
  );
}

export default PatientSymptoms;
