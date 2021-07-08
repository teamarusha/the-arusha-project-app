import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useStyles from "./Styles"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';

import AddMedicationButton from "./AddMedicationButton";

//Material UI imports
import { InputLabel, MenuItem, Select, TextField, Container, makeStyles } from "@material-ui/core";


const TreatmentMedsForm = ({ localTreatment, setLocalTreatment }) => {
  // GRAB DROPDOWN FROM DROPDOWN REDUCER
  const dropdowns = useSelector((store) => store.dropdowns);

  //DECLARE VARIABLES FOR USE OF THESE FUNCTIONS
  const classes = useStyles();
  const { id } = useParams();

  // Only handles when a value is changed by keystroke/inputfield clicks.
  // Does NOT handle initialization of new data.
  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setLocalTreatment({
      ...localTreatment,
      [newParameter.key]: newParameter.thing,
    });
  }



  return (
    <Container >
      <div className="container">
        {localTreatment && (
          <div>
            {/* MEDICATION ADMINISTERED TEXTFIELD */}
            <TextField
              id="outlined-basic"
              label="Medication Administered"
              variant="outlined"
              fullWidth
              value={
                localTreatment[
                `${id}medication${localTreatment[`${id}lastMedication`]}`
                ]
              }
              onChange={(event) =>
                submitValue({
                  key: `${id}medication${localTreatment[`${id}lastMedication`]}`,
                  thing: event.target.value,
                })
              }
            ></TextField>
            &nbsp;
            <br />
            <br />
            {/* ADMINISTERED ROUTE TEXTFIELD */}
            {dropdowns.go && localTreatment && (
              <div>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Administered Route
                </InputLabel>
                <Select
                  classes={{ root: classes.select }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}routeAdministered${localTreatment[`${id}lastMedication`]}`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}routeAdministered${localTreatment[`${id}lastMedication`]
                        }`,
                      thing: event.target.value,
                    })
                  }
                >

                  {dropdowns["med_admin_route"].map((item) => (
                    <MenuItem key={"med_admin_route" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                      {item["med_admin_route_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                {/* DOSAGE TEXTFIELD */}
                <TextField
                  id="outlined-basic"
                  label="Dosage"
                  variant="outlined"
                  value={
                    localTreatment[
                    `${id}dosage${localTreatment[`${id}lastMedication`]}`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}dosage${localTreatment[`${id}lastMedication`]}`,
                      thing: event.target.value,
                    })
                  }
                ></TextField>
                <br />
                <br />
                <br />
                {/* DOSAGE UNITS DROPDOWN */}
                <InputLabel id="demo-simple-select-autowidth-label">
                  Dosage Units
                </InputLabel>
                <Select
                  classes={{ root: classes.select }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}units${localTreatment[`${id}lastMedication`]}`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}units${localTreatment[`${id}lastMedication`]}`,
                      thing: event.target.value,
                    })
                  }
                >

                  {dropdowns["med_dosage_units"].map((item) => (
                    <MenuItem key={"med_dosage_units" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                      {item["med_dosage_units_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                {/* RESPONSE TO MED DROPDOWN */}
                <InputLabel id="demo-simple-autowidth-label">
                  Response to Medication
                </InputLabel>
                <Select
                  classes={{ root: classes.select }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}medicationResponse${localTreatment[`${id}lastMedication`]
                    }`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}medicationResponse${localTreatment[`${id}lastMedication`]
                        }`,
                      thing: event.target.value,
                    })
                  }
                >
                  {dropdowns["med_response"].map((item) => (
                    <MenuItem key={"med_response" + item.id} value={item.id} classes={{ root: classes.menuItem }} >
                      {item["med_response_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                {/* ROLE OF PERSON DROPDOWN */}
                <InputLabel id="demo-simple-autowidth-label">
                  Role/Type of Person Administering Medication
                </InputLabel>
                <Select
                  classes={{ root: classes.select }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}medsAdminBy${localTreatment[`${id}lastMedication`]
                    }`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}medsAdminBy${localTreatment[`${id}lastMedication`]
                        }`,
                      thing: event.target.value,
                    })
                  }
                >
                  {dropdowns["med_admin_by"].map((item) => (
                    <MenuItem key={"med_admin_by" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
                      {item["med_admin_by_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                {/* ADD MEDICATION BUTTON - ADDS/SAVES VALUES ABOVE */}
                <AddMedicationButton
                  treatmentMirror={localTreatment}
                  setTreatmentMirror={setLocalTreatment}
                />

              </div>
            )}
          </div>
        )}
        {/* TABLE RENDERING ALL ADDED MEDICATIONS */}
        {dropdowns.go && localTreatment && localTreatment[`${id}lastMedication`] > 1 &&

          <div>
            <h3>Medications Recorded</h3>
            <TableContainer className={classes.vitals}>
              <Table size='small'>
                <TableHead>
                  <TableRow >
                    <TableCell size="small">Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Medication</TableCell>
                    <TableCell>Administered Route</TableCell>
                    <TableCell>Dosage</TableCell>
                    <TableCell>Dosage Units</TableCell>
                    <TableCell>Response to Medication</TableCell>
                    <TableCell>Role/Type of Person Administering Medication</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {
                    localTreatment[`${id}medicationArray`].map((med, i) => {

                      if (med !== localTreatment[`${id}lastMedication`]) {

                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={id + "patientmed" + med}>
                            <TableCell>{moment(localTreatment[`${id}medicationTimestamp${med}`]).format('DD/MM/YYYY')}</TableCell>
                            <TableCell>{moment(localTreatment[`${id}medicationTimestamp${med}`]).format('hh:mm:ss')}</TableCell>
                            <TableCell>{localTreatment[`${id}medication${med}`]}</TableCell>
                            <TableCell>{dropdowns['med_admin_route'][localTreatment[`${id}routeAdministered${med}`] - 1]['med_admin_route_type']}</TableCell>
                            <TableCell>{localTreatment[`${id}dosage${med}`]}</TableCell>
                            <TableCell>{dropdowns['med_dosage_units'][localTreatment[`${id}units${med}`] - 1]['med_dosage_units_type']}</TableCell>
                            <TableCell>{dropdowns['med_response'][localTreatment[`${id}medicationResponse${med}`] - 1]['med_response_type']}</TableCell>
                            <TableCell>{dropdowns['med_admin_by'][localTreatment[`${id}medsAdminBy${med}`] - 1]['med_admin_by_type']}</TableCell>
                          </TableRow>
                        )
                      }
                    })}
                </TableBody>
              </Table>

            </TableContainer>
          </div>
        }
      </div>
    </Container>
  );
};

export default TreatmentMedsForm;
