import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ----- Material UI -----
import { InputLabel, TextField } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import useStyles from "../TreatmentForm/Styles";

function PatientCardiac({ patientsMirror, setPatientsMirror }) {
  // declare variables for use of functions
  const classes = useStyles();
  const { id } = useParams();
  // grab dropdown info stored in reducer 
  const dropdowns = useSelector((store) => store.dropdowns);


  function submitValue(newParameter) {
    setPatientsMirror({
      ...patientsMirror,
      [newParameter.key]: newParameter.thing,
    });
  }

  return (
    <div className="container">
      {/* CARDIAC ARREST DROPDOWN */}

      {dropdowns.go && patientsMirror &&
        <div>
          <InputLabel
            id="demo-simple-select-autowidth-label">Cardiac Arrest?</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}cardiacArrest`]}
            onChange={(event) =>
              submitValue({
                key: `${id}cardiacArrest`,
                thing: event.target.value,
              })
            }
          >
            {dropdowns['cardiac_arrest'].map(item => <MenuItem key={'cardiac_arrest' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`cardiac_arrest_type`]}</MenuItem>)}
            {/* <MenuItem value={10}>Option 1</MenuItem> */}

          </Select> <br /><br /><br></br>

        </div>
      }
      {/* if there was cardiac arrest - all following dropdowns will show */}
      {/* CA ETIOLOGY */}
      {dropdowns.go && patientsMirror && patientsMirror[`${id}cardiacArrest`] > 1 &&
        <div>

          <InputLabel
            id="demo-simple-select-autowidth-label">Cardiac Arrest Etiology</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}cardiacArrestEtiology`]}
            onChange={(event) =>
              submitValue({
                key: `${id}cardiacArrestEtiology`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['cardiac_arrest_etiology'].map(item => <MenuItem key={'cardiac_arrest_etiology' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`cardiac_arrest_etiology_type`]}</MenuItem>)}
          </Select> <br /><br /><br />
          {/* RESUSCITATION ATTEMPTED DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">Resuscitation Attempted by EMS</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}resuscitationAttempt`]}
            onChange={(event) =>
              submitValue({
                key: `${id}resuscitationAttempt`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['resuscitation_attempt'].map(item => <MenuItem key={'resuscitation_attempt' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`resuscitation_attempt_type`]}</MenuItem>)}
          </Select> <br /><br /><br />
          {/* CA RESUSCITATION DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">Arrest Witnessed By</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}cardiacArrestWitness`]}
            onChange={(event) =>
              submitValue({
                key: `${id}cardiacArrestWitness`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['cardiac_arrest_witness'].map(item => <MenuItem key={'cardiac_arrest_witness' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`cardiac_arrest_witness_type`]}</MenuItem>)}
          </Select> <br /><br /><br />
          {/* AED USE PRIOR DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">AED Use Prior to EMS Arrival?</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}aedUsePrior`]}
            onChange={(event) =>
              submitValue({
                key: `${id}aedUsePrior`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['aed_use_prior'].map(item => <MenuItem key={'aed_use_prior' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`aed_use_prior_type`]}</MenuItem>)}
          </Select> <br /><br /><br />
          {/* CPR PROVIDED DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">Type of CPR Provided</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}cprProvided`]}
            onChange={(event) =>
              submitValue({
                key: `${id}cprProvided`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['cpr_provided'].map(item => <MenuItem key={'cpr_provided' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`cpr_provided_type`]}</MenuItem>)}
          </Select> <br /><br /><br />
          {/* SPONTANEOUS CIRCULATION DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">Any Return of Spontaneous Circulation</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}spontaneousCirculation`]}
            onChange={(event) =>
              submitValue({
                key: `${id}spontaneousCirculation`,
                thing: event.target.value,
              })
            }
          >
            {dropdowns['spontaneous_circulation'].map(item => <MenuItem key={'spontaneous_circulation' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`spontaneous_circulation_type`]}</MenuItem>)}
          </Select> <br /><br /><br />
          {/* Timestamp of cardiac arrest */}
          <TextField
            id="date"
            label="Cardiac Arrest"
            type="date"
            value={patientsMirror[`${id}cardiacArrestDate`]}
            onChange={(event) =>
              submitValue({
                key: `${id}cardiacArrestDate`,
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
            value={patientsMirror[`${id}cardiacArrestTime`]}
            onChange={(event) =>
              submitValue({
                key: `${id}cardiacArrestTime`,
                thing: event.target.value,
              })
            } required></input> <br /><br /><br />

          {/* STOPPED CPR REASON DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">Reason for Stopping CPR/Resuscitation</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}cprStopped`]}
            onChange={(event) =>
              submitValue({
                key: `${id}cprStopped`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['cpr_stopped'].map(item => <MenuItem key={'cpr_stopped' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`cpr_stopped_type`]}</MenuItem>)}
          </Select> <br /><br /><br />

          {/* WHO INITIATED CPR DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">Who First Initiated CPR</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}cprInitiator`]}
            onChange={(event) =>
              submitValue({
                key: `${id}cprInitiator`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['cpr_initiator'].map(item => <MenuItem key={'cpr_initiator' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`cpr_initiator_type`]}</MenuItem>)}
          </Select> <br /><br /><br />

          {/* WHO APPLIED AED DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">Who First Applied AED</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}aedApplicator`]}
            onChange={(event) =>
              submitValue({
                key: `${id}aedApplicator`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['aed_applicator'].map(item => <MenuItem key={'aed_applicator' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`aed_applicator_type`]}</MenuItem>)}
          </Select> <br /><br /><br />

          {/* WHO DEFIBRILLATED DROPDOWN */}
          <InputLabel
            id="demo-simple-select-autowidth-label">Who First Defibrillated the Patient</InputLabel>
          <Select
            classes={{ root: classes.menuItem }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={patientsMirror[`${id}aedDefibrillator`]}
            onChange={(event) =>
              submitValue({
                key: `${id}aedDefibrillator`,
                thing: event.target.value,
              })
            }
          >

            {dropdowns['aed_defibrillator'].map(item => <MenuItem key={'aed_defibrillator' + item.id}
              value={item.id} classes={{ root: classes.menuItem }}>{item[`aed_defibrillator_type`]}</MenuItem>)}
          </Select> 
          <br />
        </div>

      }
    </div>
  );
}

export default PatientCardiac;
