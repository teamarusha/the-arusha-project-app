import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useStyles from "./Styles"


import AddVitalsButton from "./AddVitalsButton";
import AddEditPatient from "../AddEditPatient/AddEditPatient";
import TimestampButton from "../TimestampButton/TimestampButton";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';

//Material UI imports
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Container,
  makeStyles
} from "@material-ui/core";

const VitalsForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const dropdowns = useSelector((store) => store.dropdowns);

  const [localVitals, setLocalVitals] = useState(
    JSON.parse(localStorage.getItem("vitals"))
  );
  // const [expanded, setExpanded] = useState(false);
  const [incidentMirror, setIncidentMirror] = useState(
    JSON.parse(localStorage.getItem("incident"))
  );
  const [patientsMirror, setPatientsMirror] = useState(
    JSON.parse(localStorage.getItem("patients"))
  );
  const [treatmentMirror, setTreatmentMirror] = useState(
    JSON.parse(localStorage.getItem("treatment"))
  );
  const [vitalsMirror, setVitalsMirror] = useState(
    JSON.parse(localStorage.getItem("vitals"))
  );

  // ____________________DROPDOWNS____________________
  const localDropdownMirror = JSON.parse(localStorage.getItem("dropdowns"));

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

  // Runs whenever localVitalsMirror is changed, updated, manipulated at all
  // This way they will always be the same as long as it is the mirror that is being changed
  useEffect(() => {
    console.log("UPDATING browser storage", localVitals);
    localStorage.setItem("vitals", JSON.stringify(localVitals));
  }, [localVitals]);


  // Only handles when a value is changed by keystroke/inputfield clicks.
  // Does NOT handle initialization of new data.
  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setLocalVitals({ ...localVitals, [newParameter.key]: newParameter.thing });
  }



  return (
    <Container component="main" maxWidth="xs" >
      <div className={classes.paper}>

        <br />
        <TimestampButton
          incidentMirror={incidentMirror}
          setIncidentMirror={setIncidentMirror}
        />
        <br />

        <h2>VITALS</h2>

        <br />

        <AddEditPatient
          formName={"vitals"}
          incidentMirror={incidentMirror}
          setIncidentMirror={setIncidentMirror}
          patientsMirror={patientsMirror}
          setPatientsMirror={setPatientsMirror}
          treatmentMirror={treatmentMirror}
          setTreatmentMirror={setTreatmentMirror}
          vitalsMirror={vitalsMirror}
          setVitalsMirror={setVitalsMirror}
        />
        <br />
        <br />
      </div>

      {localVitals && (
        <div>


          <TextField
            id="outlined-basic"
            label="Systolic Blood Pressure (SBP)"
            variant="outlined"
            fullWidth
            value={
              localVitals[
              `${id}systolicBloodPressure${localVitals[`${id}lastVital`]}`
              ]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}systolicBloodPressure${localVitals[`${id}lastVital`]
                  }`,
                thing: event.target.value,
              })
            }
          ></TextField>
          &nbsp;
          <br />

          <TextField
            id="outlined-basic"
            label="Heart Rate"
            variant="outlined"
            fullWidth
            value={
              localVitals[`${id}heartRate${localVitals[`${id}lastVital`]}`]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}heartRate${localVitals[`${id}lastVital`]}`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Pulse Oximetry"
            variant="outlined"
            fullWidth
            value={
              localVitals[`${id}pulseOximetry${localVitals[`${id}lastVital`]}`]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}pulseOximetry${localVitals[`${id}lastVital`]}`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Respiratory Rate"
            variant="outlined"
            fullWidth
            value={
              localVitals[
              `${id}respiratoryRate${localVitals[`${id}lastVital`]}`
              ]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}respiratoryRate${localVitals[`${id}lastVital`]}`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Blood Glucose Level"
            variant="outlined"
            fullWidth
            value={
              localVitals[
              `${id}bloodGlucoseLevel${localVitals[`${id}lastVital`]}`
              ]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}bloodGlucoseLevel${localVitals[`${id}lastVital`]}`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Glasgow Coma Score-Eye"
            variant="outlined"
            fullWidth
            value={
              localVitals[
              `${id}glasgowComaScoreEye${localVitals[`${id}lastVital`]}`
              ]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}glasgowComaScoreEye${localVitals[`${id}lastVital`]}`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Glasgow Coma Score-Verbal"
            variant="outlined"
            fullWidth
            value={
              localVitals[
              `${id}glasgowComaScoreVerbal${localVitals[`${id}lastVital`]}`
              ]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}glasgowComaScoreVerbal${localVitals[`${id}lastVital`]
                  }`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Glasgow Coma Score-Motor"
            variant="outlined"
            fullWidth
            value={
              localVitals[
              `${id}glasgowComaScoreMotor${localVitals[`${id}lastVital`]}`
              ]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}glasgowComaScoreMotor${localVitals[`${id}lastVital`]
                  }`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Glasgow Coma Score-Qualifier"
            variant="outlined"
            fullWidth
            value={
              localVitals[
              `${id}glasgowComaScoreQualifier${localVitals[`${id}lastVital`]}`
              ]
            }
            onChange={(event) =>
              submitValue({
                key: `${id}glasgowComaScoreQualifier${localVitals[`${id}lastVital`]
                  }`,
                thing: event.target.value,
              })
            }
          ></TextField>
          <br />
          <br />
          <br />
          {dropdowns.go && (
            <div>
              <InputLabel id="demo-simple-select-autowidth-label">
                Level of Responsiveness
              </InputLabel>
              <Select

                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                fullWidth
                value={
                  localVitals[
                  `${id}responsivenessLevel${localVitals[`${id}lastVital`]}`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}responsivenessLevel${localVitals[`${id}lastVital`]
                      }`,
                    thing: event.target.value,
                  })
                }
              >

                {dropdowns["responsiveness_level"].map((item) => (
                  <MenuItem
                    classes={{ root: classes.menuItem }}
                    key={"responsiveness_level" + item.id}
                    value={item.id}
                  >
                    {item["responsiveness_level_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-select-autowidth-label">
                Pain Scale Score
              </InputLabel>
              <Select

                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                fullWidth
                value={
                  localVitals[
                  `${id}painScaleScore${localVitals[`${id}lastVital`]}`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}painScaleScore${localVitals[`${id}lastVital`]}`,
                    thing: event.target.value,
                  })
                }
              >

                {dropdowns["pain_scale"].map((item) => (
                  <MenuItem key={"${id}pain_scale" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                    {item["pain_scale_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-select-autowidth-label">
                Stroke Scale Score
              </InputLabel>
              <Select

                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                fullWidth
                value={
                  localVitals[
                  `${id}strokeScaleScore${localVitals[`${id}lastVital`]}`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}strokeScaleScore${localVitals[`${id}lastVital`]
                      }`,
                    thing: event.target.value,
                  })
                }
              >

                {dropdowns["stroke_score"].map((item) => (
                  <MenuItem key={"stroke_score" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                    {item["stroke_score_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <InputLabel id="demo-simple-select-autowidth-label">
                Stroke Scale Type
              </InputLabel>
              <Select
                classes={{ root: classes.menuItem }}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                fullWidth
                value={
                  localVitals[
                  `${id}strokeScaleType${localVitals[`${id}lastVital`]}`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}strokeScaleType${localVitals[`${id}lastVital`]}`,
                    thing: event.target.value,
                  })
                }
              >

                {dropdowns["stroke_scale"].map((item) => (
                  <MenuItem key={"stroke_scale" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                    {item["stroke_scale_type"]}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
              <br />
              <AddVitalsButton
                vitalsMirror={localVitals}
                setVitalsMirror={setLocalVitals}
              />
              <br />
              <br />

              {dropdowns.go && localVitals && localVitals[`${id}lastVital`] > 1 &&

                <div>
                  <h2>Vitals Recorded</h2>
                  <TableContainer className={classes.vitals}>
                    <Table size='small'>
                      <TableHead>
                        <TableRow >
                          <TableCell size="small">Date</TableCell>
                          <TableCell>Time</TableCell>
                          <TableCell>SBP</TableCell>
                          <TableCell>HR</TableCell>
                          <TableCell>PO</TableCell>
                          <TableCell>RR</TableCell>
                          <TableCell>BCL</TableCell>
                          <TableCell>GCS Eye</TableCell>
                          <TableCell>GCS Verbal</TableCell>
                          <TableCell>GCS Motor</TableCell>
                          <TableCell>GCS Qualifier</TableCell>
                          <TableCell>AVPU</TableCell>
                          <TableCell>Pain Scale Score</TableCell>
                          <TableCell>Stroke Scale Score</TableCell>
                          <TableCell>Pain Scale Type</TableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>

                        {
                          localVitals[`${id}vitalsArray`].map((vital, i) => {

                            if (vital != localVitals[`${id}lastVital`]) {

                              return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={id + "patientvital" + vital}>
                                  <TableCell>{moment(localVitals[`${id}vitalTimestamp${vital}`]).format('DD/MM/YYYY')}</TableCell>
                                  <TableCell>{moment(localVitals[`${id}vitalTimestamp${vital}`]).format('hh:mm:ss')}</TableCell>
                                  <TableCell>{localVitals[`${id}systolicBloodPressure${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}heartRate${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}pulseOximetry${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}respiratoryRate${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}bloodGlucoseLevel${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}glasgowComaScoreEye${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}glasgowComaScoreVerbal${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}glasgowComaScoreMotor${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}glasgowComaScoreQualifier${vital}`]}</TableCell>
                                  <TableCell>{localVitals[`${id}responsivenessLevel${vital}`] == "" ? 'N/A' : dropdowns['responsiveness_level'][localVitals[`${id}responsivenessLevel${vital}`] - 1]['responsiveness_level_type']}</TableCell>
                                  <TableCell>{localVitals[`${id}painScaleScore${vital}`] == "" ? 'N/A' : dropdowns['pain_scale'][localVitals[`${id}painScaleScore${vital}`] - 1]['pain_scale_type']}</TableCell>
                                  <TableCell>{localVitals[`${id}strokeScaleScore${vital}`] == "" ? 'N/A' : dropdowns['stroke_score'][localVitals[`${id}strokeScaleScore${vital}`] - 1]['stroke_score_type']}</TableCell>
                                  <TableCell>{localVitals[`${id}strokeScaleType${vital}`] == "" ? 'N/A' : dropdowns['stroke_scale'][localVitals[`${id}strokeScaleType${vital}`] - 1]['stroke_scale_type']}</TableCell>
                                </TableRow>
                              )
                            }
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              }

              <br />
              <br />
              <br />
              <br />
            </div>
          )}
        </div>
      )}

    </Container>
  );
};

export default VitalsForm;
