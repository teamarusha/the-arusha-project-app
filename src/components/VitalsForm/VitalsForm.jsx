import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddVitalsButton from "./AddVitalsButton";
import AddEditPatient from "../AddEditPatient/AddEditPatient";

//Material UI imports
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const VitalsForm = () => {
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);
  const [localVitals, setLocalVitals] = useState(
    JSON.parse(localStorage.getItem("vitals"))
  );
  const [expanded, setExpanded] = useState(false);
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

  // Main Button
  const [buttonText, setButtonText] = useState("Dispatched");
  function clickMe() {
    console.log("Button clicked...");

    switch (buttonText) {
      case "Dispatched":
        setButtonText("Unit En Route");
        break;
      case "Unit En Route":
        setButtonText("Arrived at Scene");
        break;
      case "Arrived at Scene":
        setButtonText("Arrived at Patient");
        break;
      case "Arrived at Patient":
        setButtonText("En Route to Hospital");
        break;
      case "En Route to Hospital":
        setButtonText("Arrived at Hospital");
        break;
      default:
        setButtonText("Dispatched");
        break;
    }
    const timestamp = Date.now(); // This would be the timestamp you want to format
    console.log(
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(timestamp)
    );
  }

  // Runs whenever localPatientMirror is changed, updated, manipulated at all
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

    // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
  }

  return (
    <div className="container">
      <h2>Vitals</h2>

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

      <div>
        <Button onClick={clickMe} color="primary" variant="contained">
          {buttonText}
        </Button>
      </div>

      {localVitals && (
        <div>
          <AddVitalsButton
            vitalsMirror={localVitals}
            setVitalsMirror={setLocalVitals}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Systolic Blood Pressure (SBP"
            variant="outlined"
            value={localVitals[`${id}systolicBloodPressure1`]}
            onChange={(event) =>
              submitValue({
                key: `${id}systolicBloodPressure1`,
                thing: event.target.value,
              })
            }
          ></TextField>
          &nbsp;
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Heart Rate"
            variant="outlined"
            value={localVitals[`${id}heartRate1`]}
            onChange={(event) =>
              submitValue({ key: `${id}heartRate1`, thing: event.target.value })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Pulse Oximetry"
            variant="outlined"
            value={localVitals[`${id}pulseOximetry1`]}
            onChange={(event) =>
              submitValue({
                key: `${id}pulseOximetry1`,
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
            value={localVitals[`${id}respiratoryRate1`]}
            onChange={(event) =>
              submitValue({
                key: `${id}respiratoryRate1`,
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
            value={localVitals[`${id}bloodGlucoseLevel1`]}
            onChange={(event) =>
              submitValue({
                key: `${id}bloodGlucoseLevel1`,
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
            value={localVitals[`${id}glasgowComaScoreEye1`]}
            onChange={(event) =>
              submitValue({
                key: `${id}glasgowComaScoreEye1`,
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
            value={localVitals[`${id}glasgowComaScoreVerbal1`]}
            onChange={(event) =>
              submitValue({
                key: `${id}glasgowComaScoreVerbal1`,
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
            value={localVitals[`${id}glasgowComaScoreMotor1`]}
            onChange={(event) =>
              submitValue({
                key: `${id}glasgowComaScoreMotor1`,
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
            value={localVitals[`${id}glasgowComaScoreQualifier1`]}
            onChange={(event) =>
              submitValue({
                key: `${id}glasgowComaScoreQualifier1`,
                thing: event.target.value,
              })
            }
          ></TextField>
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
                autoWidth
                value={localTreatment[`${id}responsivenessLevel1`]}
                onChange={(event) =>
                  submitValue({
                    key: `${id}responsivenessLevel1`,
                    thing: event.target.value,
                  })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["responsiveness_level"].map((item) => (
                  <MenuItem
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
                autoWidth
                value={localTreatment[`${id}painScaleScore1`]}
                onChange={(event) =>
                  submitValue({
                    key: `${id}painScaleScore1`,
                    thing: event.target.value,
                  })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["pain_scale"].map((item) => (
                  <MenuItem key={"${id}pain_scale" + item.id} value={item.id}>
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
                autoWidth
                value={localTreatment[`${id}strokeScaleScore1`]}
                onChange={(event) =>
                  submitValue({
                    key: `${id}strokeScaleScore1`,
                    thing: event.target.value,
                  })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["stroke_score"].map((item) => (
                  <MenuItem key={"stroke_score" + item.id} value={item.id}>
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
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                value={localTreatment[`${id}strokeScaleType1`]}
                onChange={(event) =>
                  submitValue({
                    key: `${id}strokeScaleType1`,
                    thing: event.target.value,
                  })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["stroke_scale"].map((item) => (
                  <MenuItem key={"stroke_scale" + item.id} value={item.id}>
                    {item["stroke_scale_type"]}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VitalsForm;
