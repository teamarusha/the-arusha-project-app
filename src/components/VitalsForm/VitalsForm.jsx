import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const [render, setRender] = useState(false);

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

  // ____________________LOCAL STORAGE____________________
  useEffect(() => {
    console.log("Storage Mirror:", localVitals);
    console.log("Vitals Storage:", JSON.parse(localStorage.getItem("vitals")));

    if (JSON.parse(localStorage.getItem("vitals")) === null) {
      setLocalVitals({
        initialized: true,
        systolicBloodPressure: "",
        heartRate: "",
        pulseOximetry: "",
        respiratoryRate: "",
        bloodGlucoseLevel: "",
        glasgowComaScoreEye: "",
        glasgowComaScoreVerbal: "",
        glasgowComaScoreMotor: "",
        glasgowComaScoreQualifier: "",
        responsivenessLevel: "",
        painScaleScore: "",
        strokeScaleScore: "",
        strokeScaleType: "",
      });
      setRender(true);
    }
    // Otherwise, we allow the render as there should be data in storage
    else {
      setRender(true);
    }
  }, []);

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
      <h2>Vitals Form</h2>
      <div>
        <Button onClick={clickMe} color="primary" variant="contained">
          {buttonText}
        </Button>
      </div>

      {render && (
        <div>
          <TextField
            id="outlined-basic"
            label="Systolic Blood Pressure (SBP"
            variant="outlined"
            value={localVitals[`systolicBloodPressure`]}
            onChange={(event) =>
              submitValue({
                key: `systolicBloodPressure`,
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
            value={localVitals[`heartRate`]}
            onChange={(event) =>
              submitValue({ key: `heartRate`, thing: event.target.value })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Pulse Oximetry"
            variant="outlined"
            value={localVitals[`pulseOximetry`]}
            onChange={(event) =>
              submitValue({ key: `pulseOximetry`, thing: event.target.value })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Respiratory Rate"
            variant="outlined"
            value={localVitals[`respiratoryRate`]}
            onChange={(event) =>
              submitValue({ key: `respiratoryRate`, thing: event.target.value })
            }
          ></TextField>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Blood Glucose Level"
            variant="outlined"
            value={localVitals[`bloodGlucoseLevel`]}
            onChange={(event) =>
              submitValue({
                key: `bloodGlucoseLevel`,
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
            value={localVitals[`glasgowComaScoreEye`]}
            onChange={(event) =>
              submitValue({
                key: `glasgowComaScoreEye`,
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
            value={localVitals[`glasgowComaScoreVerbal`]}
            onChange={(event) =>
              submitValue({
                key: `glasgowComaScoreVerbal`,
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
            value={localVitals[`glasgowComaScoreMotor`]}
            onChange={(event) =>
              submitValue({
                key: `glasgowComaScoreMotor`,
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
            value={localVitals[`glasgowComaScoreQualifier`]}
            onChange={(event) =>
              submitValue({
                key: `glasgowComaScoreQualifier`,
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
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dropdowns["pain_scale"].map((item) => (
                  <MenuItem key={"pain_scale" + item.id} value={item.id}>
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
