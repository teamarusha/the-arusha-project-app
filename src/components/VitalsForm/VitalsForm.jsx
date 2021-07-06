import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core"

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
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    marginTop: 65,
    marginBottom: 65,

  },
  all: {
    marginLeft: 40,
    paddingTop: 25,
    paddingBottom: 25,
    marginRight: 40,

  },
  header: {
    alignItems: 'center',

  },
  vitals: {

  }
});

const VitalsForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();

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

  // IMPORTED FOR DEMO

  useEffect(() => {
    console.log("UPDATING incident browser storage", incidentMirror);
    localStorage.setItem("incident", JSON.stringify(incidentMirror));
  }, [incidentMirror]);

  useEffect(() => {
    console.log("UPDATING patients browser storage", patientsMirror);
    localStorage.setItem("patients", JSON.stringify(patientsMirror));
  }, [patientsMirror]);

  useEffect(() => {
    console.log("UPDATING treatment browser storage", treatmentMirror);
    localStorage.setItem("treatment", JSON.stringify(treatmentMirror));
  }, [treatmentMirror]);



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

  function demoDummy() {
    let dummyIncident = {
      ['1destinationCounty']: "None",
      ['1destinationFacility']: 2,
      ['1destinationState']: "Arusha",
      ['1destinationZipCode']: "None",
      ['1transportDisposition']: 1,
      ['1transportMethod']: 6,
      ['1transportMode']: 1,
      ['2destinationCounty']: "None",
      ['2destinationFacility']: 2,
      ['2destinationState']: "Arusha",
      ['2destinationZipCode']: "None",
      ['2transportDisposition']: 1,
      ['2transportMethod']: 6,
      ['2transportMode']: 1,
      ['alcoholDrugIndicators']: 1,
      ['crew']: "414",
      ['dispositionArray']: [1, 2],
      ['incidentCounty']: "None",
      ['incidentService']: 1,
      ['incidentState']: "Arusha",
      ['incidentSummary']: "Upon arrival to scene, Patient 1 was clutching their arm, it seems to have been fractured. Patient 2 became unresponsive and was going into cardiac arrest so we administered treatment until her condition improved. We transported them to the Arusha Luthern Medical Centre where we transferred care to Dr. Chloe Everson.",
      ['incidentZipCode']: "None",
      ['patientNumbers']: "2",
      ['possibleInjury']: 3,
      ['triageCat']: 1
    };

    let dummyPatient = {
      ['1aedApplicator']: "",
      ['1aedDefibrillator']: "",
      ['1aedUsePrior']: "",
      ['1anatomicLocation']: 5,
      ['1cardiacArrest']: 1,
      ['1cardiacArrestDate']: "",
      ['1cardiacArrestEtiology']: "",
      ['1cardiacArrestTime']: "",
      ['1cardiacArrestWitness']: "",
      ['1cprInitiator']: "",
      ['1cprProvided']: "",
      ['1cprStopped']: "",
      ['1finalAcuity']: 3,
      ['1initialAcuity']: 2,
      ['1injuryCause']: 10,
      ['1injuryLocation']: 8,
      ['1lastKnownWellDate']: "2021-07-06",
      ['1lastKnownWellTime']: "11:45",
      ['1organSystem']: 8,
      ['1otherSymptoms']: "abrasions on forehead",
      ['1patientAddress']: "1234 Sample blvd",
      ['1patientAge']: "17",
      ['1patientAgeUnits']: 5,
      ['1patientAllergies']: "None",
      ['1patientCurrMedications']: "None",
      ['1patientDateOfBirth']: "2004-05-24",
      ['1patientFirstName']: "John",
      ['1patientGender']: 2,
      ['1patientHomeCounty']: "None",
      ['1patientHomeState']: "Arusha",
      ['1patientHomeZip']: "None",
      ['1patientLastName']: "Doe",
      ['1patientMedConditions']: "None",
      ['1patientRace']: 3,
      ['1primaryImpression']: 40,
      ['1primarySymptom']: "Broken Arm",
      ['1resuscitationAttempt']: "",
      ['1spontaneousCirculation']: "",
      ['1symptomOnsetDate']: "2021-07-06",
      ['1symptomOnsetTime']: "12:00",
      ['2aedApplicator']: 4,
      ['2aedDefibrillator']: 4,
      ['2aedUsePrior']: 1,
      ['2anatomicLocation']: 3,
      ['2cardiacArrest']: 3,
      ['2cardiacArrestDate']: "2021-07-06",
      ['2cardiacArrestEtiology']: 8,
      ['2cardiacArrestTime']: "12:10",
      ['2cardiacArrestWitness']: 3,
      ['2cprInitiator']: 5,
      ['2cprProvided']: 1,
      ['2cprStopped']: 6,
      ['2finalAcuity']: 1,
      ['2initialAcuity']: 1,
      ['2injuryCause']: 10,
      ['2injuryLocation']: 15,
      ['2lastKnownWellDate']: "2021-07-06",
      ['2lastKnownWellTime']: "11:45",
      ['2organSystem']: 2,
      ['2otherSymptoms']: "fell unconscious",
      ['2patientAddress']: "4321 Sample Rd",
      ['2patientAge']: "45",
      ['2patientAgeUnits']: 5,
      ['2patientAllergies']: "Penicillin",
      ['2patientCurrMedications']: "Toprol XL",
      ['2patientDateOfBirth']: "1976-06-17",
      ['2patientFirstName']: "Jane",
      ['2patientGender']: 1,
      ['2patientHomeCounty']: "None",
      ['2patientHomeState']: "Arusha",
      ['2patientHomeZip']: "None",
      ['2patientLastName']: "Smith",
      ['2patientMedConditions']: "High Blood Pressure, History of myocardial infarction",
      ['2patientRace']: 3,
      ['2primaryImpression']: 7,
      ['2primarySymptom']: "Cardiac Arrest",
      ['2resuscitationAttempt']: 3,
      ['2spontaneousCirculation']: 4,
      ['2symptomOnsetDate']: "2021-07-06",
      ['2symptomOnsetTime']: "12:00",
      go: true,
      patientArray: [1, 2]
    };

    let dummyTreatment = {
      ['1dosage1']: "400",
      ['1dosage2']: "",
      ['1lastMedication']: 2,
      ['1lastProcedure']: 2,
      ['1medication1']: "Ibuprofen",
      ['1medication2']: "",
      ['1medicationArray']: [1, 2],
      ['1medicationResponse1']: 2,
      ['1medicationResponse2']: "",
      ['1medicationTimestamp1']: "05/07/2021, 14:22:19",
      ['1medsAdminBy1']: 19,
      ['1medsAdminBy2']: "",
      ['1procedure1']: 10,
      ['1procedure2']: "",
      ['1procedureArray']: [1, 2],
      ['1procedureAttempts1']: 1,
      ['1procedureAttempts2']: "",
      ['1procedurePerformedBy1']: 19,
      ['1procedurePerformedBy2']: "",
      ['1procedureTimestamp1']: "05/07/2021, 14:22:55",
      ['1responseToProcedure1']: 2,
      ['1responseToProcedure2']: "",
      ['1routeAdministered1']: 18,
      ['1routeAdministered2']: "",
      ['1successfulProcedure1']: 2,
      ['1successfulProcedure2']: "",
      ['1units1']: 10,
      ['1units2']: "",
      ['2dosage1']: "",
      ['2lastMedication']: 1,
      ['2lastProcedure']: 2,
      ['2medication1']: "",
      ['2medicationArray']: [1],
      ['2medicationResponse1']: "",
      ['2medicationTimestamp1']: "",
      ['2medsAdminBy1']: "",
      ['2procedure1']: 6,
      ['2procedure2']: "",
      ['2procedureArray']: [1, 2],
      ['2procedureAttempts1']: 5,
      ['2procedureAttempts2']: "",
      ['2procedurePerformedBy1']: 19,
      ['2procedurePerformedBy2']: "",
      ['2procedureTimestamp1']: "05/07/2021, 14:23:38",
      ['2responseToProcedure1']: 1,
      ['2responseToProcedure2']: "",
      ['2routeAdministered1']: "",
      ['2successfulProcedure1']: 2,
      ['2successfulProcedure2']: "",
      ['2units1']: ""
    };

    let dummyVitals = {
      ['1bloodGlucoseLevel1']: "",
      ['1glasgowComaScoreEye1']: "",
      ['1glasgowComaScoreMotor1']: "",
      ['1glasgowComaScoreQualifier1']: "",
      ['1glasgowComaScoreVerbal1']: "",
      ['1heartRate1']: "",
      ['1lastVital']: 1,
      ['1painScaleScore1']: "",
      ['1pulseOximetry1']: "",
      ['1respiratoryRate1']: "",
      ['1responsivenessLevel1']: "",
      ['1strokeScaleScore1']: "",
      ['1strokeScaleType1']: "",
      ['1systolicBloodPressure1']: "",
      ['1vitalTimestamp1']: "",
      ['1vitalsArray']: [1],
      ['2bloodGlucoseLevel1']: "",
      ['2bloodGlucoseLevel2']: "",
      ['2glasgowComaScoreEye1']: "",
      ['2glasgowComaScoreEye2']: "",
      ['2glasgowComaScoreMotor1']: "",
      ['2glasgowComaScoreMotor2']: "",
      ['2glasgowComaScoreQualifier1']: "",
      ['2glasgowComaScoreQualifier2']: "",
      ['2glasgowComaScoreVerbal1']: "",
      ['2glasgowComaScoreVerbal2']: "",
      ['2heartRate1']: "120",
      ['2heartRate2']: "",
      ['2lastVital']: 2,
      ['2painScaleScore1']: "",
      ['2painScaleScore2']: "",
      ['2pulseOximetry1']: "91",
      ['2pulseOximetry2']: "",
      ['2respiratoryRate1']: "30",
      ['2respiratoryRate2']: "",
      ['2responsivenessLevel1']: 4,
      ['2strokeScaleScore1']: "",
      ['2strokeScaleScore2']: "",
      ['2strokeScaleType1']: "",
      ['2strokeScaleType2']: "",
      ['2systolicBloodPressure1']: "150",
      ['2systolicBloodPressure2']: "",
      ['2vitalTimestamp1']: "05/07/2021, 14:26:50",
      ['2vitalTimestamp2']: "",
      ['2vitalsArray']: [1, 2]
    };

    setVitalsMirror({ ...vitalsMirror, ...dummyVitals });

    setTreatmentMirror({ ...treatmentMirror, ...dummyTreatment });

    setPatientsMirror({ ...patientsMirror, ...dummyPatient });

    setIncidentMirror({ ...incidentMirror, ...dummyIncident });

  };

  return (
    <Container>
      <div className="container">

        <br />

        <TimestampButton
          incidentMirror={incidentMirror}
          setIncidentMirror={setIncidentMirror}
        />
        <br />

        <h2 onClick={demoDummy} >VITALS</h2>

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
                    <MenuItem key={"stroke_scale" + item.id} value={item.id}>
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

                {dropdowns.go && localVitals && localVitals[`${id}vitalsArray`].length > 1 &&

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
                                    <TableCell>{localVitals[`${id}responsivenessLevel${vital}`] =="" ? 'N/A' : dropdowns['responsiveness_level'][localVitals[`${id}responsivenessLevel${vital}`]-1]['responsiveness_level_type']}</TableCell>
                                    <TableCell>{localVitals[`${id}painScaleScore${vital}`] =="" ? 'N/A' : dropdowns['pain_scale'][localVitals[`${id}painScaleScore${vital}`]-1]['pain_scale_type']}</TableCell>
                                    <TableCell>{localVitals[`${id}strokeScaleScore${vital}`]=="" ? 'N/A': dropdowns['stroke_score'][localVitals[`${id}strokeScaleScore${vital}`]-1]['stroke_score_type']}</TableCell>
                                    <TableCell>{localVitals[`${id}strokeScaleType${vital}`]=="" ? 'N/A' : dropdowns['stroke_scale'][localVitals[`${id}strokeScaleType${vital}`]-1]['stroke_scale_type']}</TableCell>
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
        )}
      </div>
    </Container>
  );
};

export default VitalsForm;
