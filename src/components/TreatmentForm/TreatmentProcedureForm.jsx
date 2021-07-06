import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useStyles from "./Styles";
import AddProcedureButton from "./AddProcedureButton";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';

//Material UI imports
import { InputLabel, MenuItem, Select, TextField, Container } from "@material-ui/core";

const TreatmentProcedureForm = ({ localTreatment, setLocalTreatment }) => {
  const dropdowns = useSelector((store) => store.dropdowns);
  const { id } = useParams();
  const classes = useStyles();
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

    // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
  }

  return (
    <Container>
      <div className="container">


        {localTreatment && (
          <div>
            {dropdowns.go && (
              <div>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Procedure Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}procedure${localTreatment[`${id}lastProcedure`]}`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}procedure${localTreatment[`${id}lastProcedure`]
                        }`,
                      thing: event.target.value,
                    })
                  }
                >

                  {dropdowns["procedure_list"].map((item) => (
                    <MenuItem key={"procedure_list" + item.id} value={item.id}>
                      {item["procedure_list_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                <InputLabel id="demo-simple-select-autowidth-label">
                  # of Procedure Attempts
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}procedureAttempts${localTreatment[`${id}lastProcedure`]
                    }`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}procedureAttempts${localTreatment[`${id}lastProcedure`]
                        }`,
                      thing: event.target.value,
                    })
                  }
                >
                  {dropdowns["procedures_attempted"].map((item) => (
                    <MenuItem
                      key={"procedures_attempted" + item.id}
                      value={item.id}
                    >
                      {item["procedures_attempted_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                <InputLabel id="demo-simple-select-autowidth-label">
                  Procedure Successful
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}successfulProcedure${localTreatment[`${id}lastProcedure`]
                    }`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}successfulProcedure${localTreatment[`${id}lastProcedure`]
                        }`,
                      thing: event.target.value,
                    })
                  }
                >
                  {dropdowns["procedure_successful"].map((item) => (
                    <MenuItem
                      classes={{ root: classes.menuItem }}
                      key={"procedure_successful" + item.id}
                      value={item.id}
                    >
                      {item["procedure_successful_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                <InputLabel id="demo-simple-select-autowidth-label">
                  Response to Procedure
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}responseToProcedure${localTreatment[`${id}lastProcedure`]
                    }`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}responseToProcedure${localTreatment[`${id}lastProcedure`]
                        }`,
                      thing: event.target.value,
                    })
                  }
                >
                  {dropdowns["procedure_response"].map((item) => (
                    <MenuItem
                      classes={{ root: classes.menuItem }}
                      key={"procedure_response" + item.id}
                      value={item.id}
                    >
                      {item["procedure_response_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                <InputLabel id="demo-simple-select-autowidth-label">
                  Role/Type of Person Performing Procedure
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  fullWidth
                  value={
                    localTreatment[
                    `${id}procedurePerformedBy${localTreatment[`${id}lastProcedure`]
                    }`
                    ]
                  }
                  onChange={(event) =>
                    submitValue({
                      key: `${id}procedurePerformedBy${localTreatment[`${id}lastProcedure`]
                        }`,
                      thing: event.target.value,
                    })
                  }
                >
                  {dropdowns["procedure_performer"].map((item) => (
                    <MenuItem
                      classes={{ root: classes.menuItem }}
                      key={"procedure_performer" + item.id}
                      value={item.id}
                    >
                      {item["procedure_performer_type"]}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <br />
                <br />
                <AddProcedureButton
                  treatmentMirror={localTreatment}
                  setTreatmentMirror={setLocalTreatment}
                />

              </div>
            )}
            {dropdowns.go && localTreatment && localTreatment[`${id}procedureArray`].length > 1 &&

              <div>
                <h3>Medications Recorded</h3>
                <TableContainer>
                  <Table size='small'>
                    <TableHead>
                      <TableRow >
                        <TableCell size="small">Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Procedure</TableCell>
                        <TableCell># of Procedure Attempts</TableCell>
                        <TableCell>Procedure Successful?</TableCell>
                        <TableCell>Response to Procedure</TableCell>
                        <TableCell>Role/Type of Person Performing Procedure</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                      {
                        localTreatment[`${id}procedureArray`].map((proc, i) => {

                          if (proc !== localTreatment[`${id}lastProcedure`]) {

                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={id + "patientmed" + proc}>
                                <TableCell>{moment(localTreatment[`${id}procedureTimestamp${proc}`]).format('DD/MM/YYYY')}</TableCell>
                                <TableCell>{moment(localTreatment[`${id}procedureTimestamp${proc}`]).format('hh:mm:ss')}</TableCell>
                                <TableCell>{dropdowns['procedure_list'][localTreatment[`${id}procedure${proc}`] - 1]['procedure_list_type']}</TableCell>
                                <TableCell>{dropdowns['procedures_attempted'][localTreatment[`${id}procedureAttempts${proc}`] - 1]['procedures_attempted_type']}</TableCell>
                                <TableCell>{dropdowns['procedure_successful'][localTreatment[`${id}successfulProcedure${proc}`] - 1]['procedure_successful_type']}</TableCell>
                                <TableCell>{dropdowns['procedure_response'][localTreatment[`${id}responseToProcedure${proc}`] - 1]['procedure_response_type']}</TableCell>
                                <TableCell>{dropdowns['procedure_performer'][localTreatment[`${id}procedurePerformedBy${proc}`] - 1]['procedure_performer_type']}</TableCell>
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
        )}
      </div>
    </Container>
  );
};

export default TreatmentProcedureForm;
