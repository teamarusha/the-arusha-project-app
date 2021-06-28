import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import {
  Accordion,
  AccordionDetails,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
} from "@material-ui/core";

const TreatmentMedsForm = ({ localTreatment, setLocalTreatment, render }) => {
  // let [localTreatment, setLocalTreatment] = useState(
  //   JSON.parse(localStorage.getItem("treatment"))
  // );
  // let [render, setRender] = useState(false);
  // const { id } = useParams();
  // const history = useHistory();
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);

  // Runs whenever localPatientMirror is changed, updated, manipulated at all
  // This way they will always be the same as long as it is the mirror that is being changed
  useEffect(() => {
    console.log("UPDATING browser storage", localTreatment);
    localStorage.setItem("treatment", JSON.stringify(localTreatment));
  }, [localTreatment]);

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
    <div>
      {render && (
        <div>
          <TextField
            id="outlined-basic"
            label="Medication Administered"
            variant="outlined"
            value={localIncident[`medication`]}
            onChange={(event) =>
              submitValue({ key: `medication`, thing: event.target.value })
            }
          ></TextField>
          {dropdowns.go && render && (
            <div>
              <TextField
                id="outlined-basic"
                select
                label="Administered Route"
                variant="outlined"
                value={localIncident[`routeAdministered`]}
                onChange={(event) =>
                  submitValue({
                    key: `routeAdministered`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["med_admin_route"].map((item) => (
                  <MenuItem key={"med_admin_route" + item.id} value={item.id}>
                    {item["med_admin_route_type"]}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          )}
          <TextField
            id="outlined-basic"
            label="Dosage"
            variant="outlined"
            value={localIncident[`dosage`]}
            onChange={(event) =>
              submitValue({ key: `dosage`, thing: event.target.value })
            }
          ></TextField>
          {dropdowns.go && render && (
            <div>
              <TextField
                id="outlined-basic"
                select
                label="Dosage Units"
                variant="outlined"
                value={localIncident[`units`]}
                onChange={(event) =>
                  submitValue({
                    key: `units`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["med_dosage_units"].map((item) => (
                  <MenuItem key={"med_dosage_units" + item.id} value={item.id}>
                    {item["med_dosage_units_type"]}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                select
                label="Response to Medication"
                variant="outlined"
                value={localTreatment[`med_response`]}
                onChange={(event) =>
                  submitValue({
                    key: `med_response`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["med_response"].map((item) => (
                  <MenuItem key={"med_response" + item.id} value={item.id}>
                    {item["med_response_type"]}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                select
                label="Role/Type of Person Administering Medication"
                variant="outlined"
                value={localTreatment[`medsAdminBy`]}
                onChange={(event) =>
                  submitValue({
                    key: `medsAdminBy`,
                    thing: event.target.value,
                  })
                }
              >
                {dropdowns["med_admin_by"].map((item) => (
                  <MenuItem key={"med_admin_by" + item.id} value={item.id}>
                    {item[med_admin_by_type]}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TreatmentMedsForm;
