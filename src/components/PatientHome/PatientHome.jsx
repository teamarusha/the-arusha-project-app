import React from 'react';
import PatientDemographics from '../PatientDemographics/PatientDemographics';
import PatientMedical from '../PatientMedical/PatientMedical';
import PatientSymptoms from '../PatientSymptoms/PatientSymptoms';
import PatientInjury from '../PatientInjury/PatientInjury';
import PatientCardiac from '../PatientCardiac/PatientCardiac';
import AddEditPatient from '../AddEditPatient/AddEditPatient';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// ----- Material UI -----
import { makeStyles } from '@material-ui/core/styles';
import { Accordion } from '@material-ui/core';
import { AccordionDetails } from '@material-ui/core';
import { AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TimestampButton from '../TimestampButton/TimestampButton';

// ----- More Material UI -----
// import globalUseStyle from "./globalUseStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { TextField, Paper, Grid } from "@material-ui/core";
import { left } from 'inquirer/lib/utils/readline';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    // textAlign: 'center',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    // color: theme.palette.text.secondary,
  },

  text: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}));


function PatientHome() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);

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

  

  // const [buttonText, setButtonText] = useState('Dispatched');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // function clickMe() {
  //   console.log('Button clicked...');

  //   // handleClick = () => {

  //     switch (buttonText) {
  //       case "Dispatched":
  //         setButtonText("Unit En Route");
  //         break;
  //       case "Unit En Route":
  //         setButtonText("Arrived at Scene");
  //         break;
  //       case "Arrived at Scene":
  //         setButtonText("Arrived at Patient");
  //         break;
  //       case "Arrived at Patient":
  //         setButtonText("En Route to Hospital");
  //         break;
  //       case "En Route to Hospital":
  //         setButtonText("Arrived at Hospital");
  //         break;
  //       default:
  //         setButtonText("Dispatched");
  //         break;
  //     }

  //     const timestamp = Date.now(); // This would be the timestamp you want to format
  //     console.log(
  //       new Intl.DateTimeFormat("en-US", {
  //         year: "numeric",
  //         month: "2-digit",
  //         day: "2-digit",
  //         hour: "2-digit",
  //         minute: "2-digit",
  //         second: "2-digit"
  //   }).format(timestamp)
  // );

  // }

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




  return (
    <div className="container">
      <h2>Patient Form Home</h2>

      {/* <div>
              <Button onClick={clickMe} color="primary"
              variant="contained"
              // onClick={() => handleClick()}
              >{buttonText}</Button>
            </div> */}

      <TimestampButton />

      <AddEditPatient
        formName={"patient"}
        incidentMirror={incidentMirror}
        setIncidentMirror={setIncidentMirror}
        patientsMirror={patientsMirror}
        setPatientsMirror={setPatientsMirror}
        treatmentMirror={treatmentMirror}
        setTreatmentMirror={setTreatmentMirror}
        vitalsMirror={vitalsMirror}
        setVitalsMirror={setVitalsMirror}
      />

      <p>List of Links for Patient Form:</p>
      {/* <ul>
                <li><Link to="/patientDemographics">Patient Demographics Form</Link></li>
                <li><Link to="/patientMedical">Patient Medical History Form</Link></li>
                <li><Link to="/patientSymptoms">Patient Symptoms Form</Link></li>
                <li><Link to="/patientInjury">Patient Injury Form</Link></li>
                <li><Link to="/patientCardiacArrest">Patient Cardiac Arrest Form</Link></li>
            </ul> */}

      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{ textAlign: 'center' }}
          >
            <Typography classes={{ root: classes.text }} className={classes.heading}>Demographics</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <PatientDemographics
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
            />
            {/* <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography> */}
          </AccordionDetails>
        </Accordion><br />

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            style={{ textAlign: 'center' }}
          >
            <Typography classes={{ root: classes.text }} className={classes.heading}>Medical History</Typography>
            {/* <Typography className={classes.secondaryHeading}>
            Yo! Click me.
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <PatientMedical
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
            />
            {/* <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography> */}
          </AccordionDetails>
        </Accordion><br />

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            style={{ textAlign: 'center' }}
          >
            <Typography classes={{ root: classes.text }} className={classes.heading}>Symptoms</Typography>
            {/* <Typography className={classes.secondaryHeading}>
            Symptoms
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <PatientSymptoms
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
            />
            {/* <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography> */}
          </AccordionDetails>
        </Accordion><br />

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            style={{ textAlign: 'center' }}
          >
            <Typography classes={{ root: classes.text }} className={classes.heading}>Injury</Typography>
            {/* <Typography className={classes.secondaryHeading}>
            Injury
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <PatientInjury
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
            />
            {/* <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography> */}
          </AccordionDetails>
        </Accordion><br />

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            style={{ textAlign: 'center' }}
          >
            <Typography classes={{ root: classes.text }} className={classes.heading}>Cardiac Arrest</Typography>
            {/* <Typography className={classes.secondaryHeading}>
            Cardiac Arrest
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <PatientCardiac
              patientsMirror={patientsMirror}
              setPatientsMirror={setPatientsMirror}
            />
            {/* <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography> */}
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
}

export default PatientHome;
