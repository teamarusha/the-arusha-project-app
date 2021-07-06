import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useStyles from "./Styles";
import AddProcedureButton from "./AddProcedureButton";

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
                    key: `${id}procedure${
                      localTreatment[`${id}lastProcedure`]
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
                    `${id}procedureAttempts${
                      localTreatment[`${id}lastProcedure`]
                    }`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}procedureAttempts${
                      localTreatment[`${id}lastProcedure`]
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
                    `${id}successfulProcedure${
                      localTreatment[`${id}lastProcedure`]
                    }`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}successfulProcedure${
                      localTreatment[`${id}lastProcedure`]
                    }`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["procedure_successful"].map((item) => (
                  <MenuItem
                    classes={{root: classes.menuItem}}
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
                    `${id}responseToProcedure${
                      localTreatment[`${id}lastProcedure`]
                    }`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}responseToProcedure${
                      localTreatment[`${id}lastProcedure`]
                    }`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["procedure_response"].map((item) => (
                  <MenuItem
                    classes={{root: classes.menuItem}}
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
                    `${id}procedurePerformedBy${
                      localTreatment[`${id}lastProcedure`]
                    }`
                  ]
                }
                onChange={(event) =>
                  submitValue({
                    key: `${id}procedurePerformedBy${
                      localTreatment[`${id}lastProcedure`]
                    }`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["procedure_performer"].map((item) => (
                  <MenuItem
                    classes={{root: classes.menuItem}}
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
        </div>
      )}
    </div>
    </Container>
  );
};

export default TreatmentProcedureForm;
