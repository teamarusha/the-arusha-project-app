import React from 'react';
import { Link } from 'react-router-dom';
import PatientDemographics from '../PatientDemographics/PatientDemographics';
import PatientMedical from '../PatientMedical/PatientMedical';
import PatientSymptoms from '../PatientSymptoms/PatientSymptoms';

// ----- Material UI -----
import { makeStyles } from '@material-ui/core/styles';
import { Accordion } from '@material-ui/core';
import { AccordionDetails } from '@material-ui/core';
import { AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));


function PatientHome() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


    return (
        <div className="container">
            <h2>Patient Form Home</h2>
            <p>List of Links for Patient Form:</p>
            <ul>
                <li><Link to="/patientDemographics">Patient Demographics Form</Link></li>
                <li><Link to="/patientMedical">Patient Medical History Form</Link></li>
                <li><Link to="/patientSymptoms">Patient Symptoms Form</Link></li>
                <li><Link to="/patientInjury">Patient Injury Form</Link></li>
                <li><Link to="/patientCardiacArrest">Patient Cardiac Arrest Form</Link></li>
            </ul>
            
            <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Demographics</Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <PatientDemographics />
          {/* <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Medical History</Typography>
          <Typography className={classes.secondaryHeading}>
            Yo! Click me.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <PatientMedical />
          {/* <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Symptoms</Typography>
          <Typography className={classes.secondaryHeading}>
            You can click me too.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <PatientSymptoms />
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