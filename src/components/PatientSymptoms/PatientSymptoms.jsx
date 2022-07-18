import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// ----- Material UI -----
import { TextField, Container, InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import useStyles from "../TreatmentForm/Styles";

function PatientSymptoms({ patientsMirror, setPatientsMirror }) {
  // DECLARE VARIABLES FOR USE OF THESE FUNCTIONS
  const classes = useStyles();
  const { id } = useParams();

  // GET DROPDOWNS THAT ARE BEING STORED IN REDUCER
  const dropdowns = useSelector((store) => store.dropdowns);


  function submitValue(newParameter) {
    setPatientsMirror({
      ...patientsMirror,
      [newParameter.key]: newParameter.thing,
    });
  }

  return (
    <Container>
      <div className="container">

        {/* ANATOMIC LOCATION DROP DOWN MENU */}
        {dropdowns.go && patientsMirror &&
          <div>
            <InputLabel
              id="demo-simple-select-autowidth-label">Chief Complaint Anatomic Location</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              value={patientsMirror[`${id}anatomicLocation`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}anatomicLocation`,
                  thing: event.target.value,
                })
              }
            >
              {dropdowns['anatomic_location'].map(item => <MenuItem key={'anatomic_location' + item.id}
                value={item.id} classes={{ root: classes.menuItem }} >{item[`anatomic_location_type`]}</MenuItem>)}
            </Select> <br /><br /><br />

            {/* ORGAN SYSTEM DROPDOWN MENU */}
            <InputLabel
              id="demo-simple-select-autowidth-label">Chief Complaint Organ System</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              value={patientsMirror[`${id}organSystem`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}organSystem`,
                  thing: event.target.value,
                })
              }
            >
              {dropdowns['organ_system'].map(item => <MenuItem key={'organ_system' + item.id}
                value={item.id} classes={{ root: classes.menuItem }} >{item[`organ_system_type`]} </MenuItem>)}
            </Select> <br /><br /><br />

            {/* Symptom Onset DATE TEXTFIELD */}
            <TextField
              id="date"
              label="Symptom Onset"
              type="date"
              value={patientsMirror[`${id}symptomOnsetDate`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}symptomOnsetDate`,
                  thing: event.target.value,
                })
              }
              InputLabelProps={{
                shrink: true,
              }}
            />&nbsp; &nbsp; <br /><br />
            <label htmlFor="appt">Time:</label>
            <input type="time" id="appt" name="appt"
              min="09:00" max="18:00"
              value={patientsMirror[`${id}symptomOnsetTime`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}symptomOnsetTime`,
                  thing: event.target.value,
                })
              }
              required></input> <br /><br />
            {/* PRIMARY SYMPTOM TEXTFIELD */}
            <TextField
              id="outlined-basic"
              label="Primary Symptom"
              variant="outlined"
              multiline
              minRows={3}
              fullWidth
              value={patientsMirror[`${id}primarySymptom`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}primarySymptom`,
                  thing: event.target.value,
                })
              }
            >
            </TextField> &nbsp;<br /><br />

            {/* OTHER SYMPTOMS TEXTFIELD */}
            <TextField
              id="outlined-basic"
              label="Other Associated Symptoms"
              variant="outlined"
              multiline
              minRows={3}
              fullWidth
              value={patientsMirror[`${id}otherSymptoms`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}otherSymptoms`,
                  thing: event.target.value,
                })
              }>
            </TextField> <br /><br /><br />

            {/* INITIAL AQUITY DROPDOWN MENU */}
            <InputLabel
              id="demo-simple-select-autowidth-label">Initial Patient Aquity</InputLabel>
            <Select
              classes={{ root: classes.menuItem }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              value={patientsMirror[`${id}initialAcuity`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}initialAcuity`,
                  thing: event.target.value,
                })
              }
            >
              {dropdowns['initial_acuity'].map(item => <MenuItem key={'initial_acuity' + item.id}
                value={item.id} classes={{ root: classes.menuItem }} >{item[`initial_acuity_type`]} </MenuItem>)}
            </Select> <br /><br /><br />

            {/* FINAL AQUITY DROPDOWN MENU */}
            <InputLabel
              id="demo-simple-select-autowidth-label">Final Patient Aquity</InputLabel>
            <Select
              classes={{ root: classes.menuItem }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              value={patientsMirror[`${id}finalAcuity`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}finalAcuity`,
                  thing: event.target.value,
                })
              }
            >
              {dropdowns['final_acuity'].map(item => <MenuItem key={'final_acuity' + item.id}
                value={item.id} classes={{ root: classes.menuItem }}>{item[`final_acuity_type`]}</MenuItem>)}
            </Select> <br /><br />

            {/* PRIMARY IMPRESSION DROPDOWN MENU */}
            <InputLabel
              id="demo-simple-select-autowidth-label">Provider's Primary Impression</InputLabel>
            <Select
              classes={{ root: classes.menuItem }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              value={patientsMirror[`${id}primaryImpression`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}primaryImpression`,
                  thing: event.target.value,
                })
              }
            >
              {dropdowns['primary_impression'].map(item => <MenuItem key={'primary_impression' + item.id}
                value={item.id} classes={{ root: classes.menuItem }} >{item[`primary_impression_type`]}  </MenuItem>)}
            </Select> <br /><br /><br />

            {/* LAST KNOWN WELL DATE TEXTFIELD */}
            <TextField
              id="date"
              label="Last Known Well:"
              type="date"
              value={patientsMirror[`${id}lastKnownWellDate`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}lastKnownWellDate`,
                  thing: event.target.value,
                })
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br /><br />
            {/* LAST KNOWN WELL TIME INPUT */}
            <label htmlFor="appt">Time:</label>
            <input type="time" id="appt" name="appt"
              min="00:00" max="24:00"
              value={patientsMirror[`${id}lastKnownWellTime`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}lastKnownWellTime`,
                  thing: event.target.value,
                })
              }
              required></input> <br /><br />
          </div>
        }
      </div>
    </Container>
  );
}

export default PatientSymptoms;
