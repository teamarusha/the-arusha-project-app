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

const TreatmentMedsForm = () => {
  let [localTreatment, setLocalTreatment] = useState(
    JSON.parse(localStorage.getItem("treatment"))
  );
  let [render, setRender] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);

  // Runs once when the component mounts
  useEffect(() => {
    // console.log('Params id:', id);
    console.log("Cookie Mirror:", localTreatment);
    console.log(
      "Treatment Storage:",
      JSON.parse(localStorage.getItem("treatment"))
    );
    // If the user comes to this page without a patient ID, get redirected to patient 1
    if (!id) {
      history.push("/treatment/medication/1");
    }
    // If they get redirected from patient 1 AND they have already entered values, skip this step
    // If they are redirected here from /patients, initialize the first patient
    else if (
      id == 1 &&
      JSON.parse(localStorage.getItem("treatment")) === null
    ) {
      setLocalTreatment({
        "1medicationArray": [1],
        [id + "medication1"]: "",
        [id + "routeAdministered1"]: "",
        [id + "dosage1"]: "",
        [id + "units1"]: "",
        [id + "medicationResponse1"]: "",
        [id + "medsAdminBy1"]: "",
      });
      setRender(true);
    }
    // Otherwise, we allow the render as there should be data in storage
    else {
      setRender(true);
    }
  }, []);

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

  // This function handles initialization of new patients
  function addMedication() {
    // newMedicationID will be the next medication added. Does not use params from the url
    // Instead it looks at the treatmentArray and adds the next procedure based on that
    // THIS ID IS NOT THE PROCEDURE'S ID FROM THE DATABASE,
    // THIS VALUE MEANS NOTHING AFTER SUBMISSION
    let newMedicationID = localTreatment.medicationArray.length + 1;
    console.log("new medication ID", newMedicationID);
    // This is where all parameters associated with a new patient get initialized
    // We do this in order to not have inputs stagnate as you chose a new patient to edit
    setLocalTreatment({
      ...localTreatment,
      treatmentArray: [
        ...localTreatment[id + "medicationArray"],
        newMedicationID,
      ],
      [id + "medication" + newMedicationID]: "",
      [id + "routeAdministered" + newMedicationID]: "",
      [id + "dosage" + newMedicationID]: "",
      [id + "units" + newMedicationID]: "",
      [id + "medicationResponse" + newMedicationID]: "",
      [id + "medsAdminBy" + newMedicationID]: "",
    });
  }

  // Simply redirects to the patient page of a new patient
  // based on their position in the patientArray
  function changePatient(patientNumber) {
    history.push(`/treatment/${patientNumber}`);
  }

  let [localDropdownMirror, setLocalDropdownMirror] = useState(
    JSON.parse(localStorage.getItem("dropdowns"))
  );

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

  return (
    <div>
      {render
        ? localPatientMirror.patientArray.map((value) => (
            <button
              key={`${value}changePatient`}
              disabled={id == value}
              onClick={() => changePatient(value)}
            >
              Edit Patient {value}
            </button>
          ))
        : ""}

      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={addMedication}
      >
        Add Medication
      </Button>

      <TextField
        id="outlined-basic"
        label="Medication Administered"
        variant="outlined"
        value={localTreatment[`medication`]}
        onChange={(event) =>
          submitValue({ key: `medication`, thing: event.target.value })
        }
      ></TextField>

      {dropdowns.go && (
        <TextField
          id="outlined-basic"
          select
          label="Administered Route"
          variant="outlined"
          value={localTreatment[`routeAdministered`]}
          onChange={(event) =>
            submitValue({ key: `routeAdministered`, thing: event.target.value })
          }
        >
          {dropdowns["med_admin_route"].map((item) => (
            <MenuItem key={"med_admin_route" + item.id} value={item.id}>
              {item.type}
            </MenuItem>
          ))}
        </TextField>
      )}

      <TextField
        id="outlined-basic"
        label="Dosage"
        variant="outlined"
        value={localTreatment[`dosage`]}
        onChange={(event) =>
          submitValue({ key: `dosage`, thing: event.target.value })
        }
      ></TextField>

      {dropdowns.go && (
        <div>
          {render
            ? localPatientMirror.patientArray.map((value) => (
                <button
                  key={`${value}changePatient`}
                  disabled={id == value}
                  onClick={() => changePatient(value)}
                >
                  Edit Patient {value}
                </button>
              ))
            : ""}
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={addMedication}
          >
            Add Medication
          </Button>
          <TextField
            id="outlined-basic"
            label="Medication Administered"
            variant="outlined"
            value={localTreatment[`medication`]}
            onChange={(event) =>
              submitValue({ key: `medication`, thing: event.target.value })
            }
          ></TextField>
          {dropdowns.go && (
            <TextField
              id="outlined-basic"
              select
              label="Administered Route"
              variant="outlined"
              value={localTreatment[`routeAdministered`]}
              onChange={(event) =>
                submitValue({
                  key: `routeAdministered`,
                  thing: event.target.value,
                })
              }
            >
              {dropdowns["med_admin_route"].map((item) => (
                <MenuItem key={"med_admin_route" + item.id} value={item.id}>
                  {item.type}
                </MenuItem>
              ))}
            </TextField>
          )}
          >
          <TextField
            id="outlined-basic"
            select
            label="Response to Medication"
            variant="outlined"
            value={localTreatment[`med_response`]}
            onChange={(event) =>
              submitValue({ key: `med_response`, thing: event.target.value })
            }
          >
            {dropdowns["med_response"].map((item) => (
              <MenuItem key={"med_response" + item.id} value={item.id}>
                {item.type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            select
            label="Role/Type of Person Administering 
                Medication"
            variant="outlined"
            value={localTreatment[`medsAdminBy`]}
            onChange={(event) =>
              submitValue({ key: `medsAdminBy`, thing: event.target.value })
            }
          >
            {dropdowns["med_admin_by"].map((item) => (
              <MenuItem key={"med_admin_by" + item.id} value={item.id}>
                {item.type}
              </MenuItem>
            ))}
          </TextField>
        </div>
      )}
    </div>
  );
};

export default TreatmentMedsForm;
