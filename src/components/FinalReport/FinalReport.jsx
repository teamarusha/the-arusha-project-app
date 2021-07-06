import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import React from 'react';

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

function FinalReport() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const report = useSelector(store => store.report);
    console.log('report:', report.med)
    const med = report.med
    const vit = report.vit
    const pro = report.pro

    // console.log('med name insulin:',med.med_name)
    useEffect(() => {
        console.log('in useEffect param:', id)
        dispatch({ type: 'FETCH_REPORT', payload: id })
    }, []);


    return (
        // <p>{JSON.stringify(report)}</p>
        <Container >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item lg={10}>
                    <Box boxShadow={3} className={classes.root}>

                        <div className={classes.all}>
                            <div className={classes.header}>
                                <h1>Patient Care Report #{id}</h1>

                                <h3>RESPONSE</h3>
                                <p>Incident #: {report.patient_incident_id}</p>
                                <p>Responder: {report.user_first_name} {report.user_last_name}</p>
                                <p>Region ID: {report.region_id}</p>
                                <p>Crew ID: {report.crew_id}</p>
                                <p>Triage Category: {report.triage_cat_type}</p>
                                <p>Type of Service Requested: {report.incident_service_type}</p>
                                <p>Unit Notified by Dispatch: {moment(report.unit_notified).format('DD/MM/YYYY hh:mm:ss')} </p>
                                <p>Unit En Route: {moment(report.unit_enroute).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <p>Unit Arrived At Scene: {moment(report.unit_arrived_scene).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <p>Arrived At Patient: {moment(report.arrived_patient).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <p>Unit Left Scene: {moment(report.unit_left_scene).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <p>Patient Arrived at Destination: {moment(report.arrived_destination).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <p>Destination Patient Transfer of Care: {moment(report.transfer_of_care).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <p>Unit Back In Service: {moment(report.unit_in_service).format('DD/MM/YYYY hh:mm:ss')}</p>

                            </div>
                            <div className='scene'>
                                <h3>SCENE</h3>
                                <p># of Patients at Scene: {report.number_patients} </p>
                                <p>Incident State: {report.incident_state}</p>
                                <p>Incident County: {report.incident_county}</p>
                                <p>Incident Zip: {report.incident_zip}</p>
                                <p>Possible Injury? {report.possible_injury_type}</p>
                                <p>Alcohol/Drug Use Indicators: {report.alcohol_drug_use_type}</p>
                            </div>
                            <div className='patient'>
                                <h3>PATIENT INFORMATION</h3>
                                <p>First Name: {report.patient_first_name}</p>
                                <p>Last Name: {report.patient_last_name}</p>
                                <p>Address: {report.address}</p>
                                <p>Home State: {report.home_state}</p>
                                <p>Home County: {report.home_county}</p>
                                <p>Home Zip: {report.home_zip}</p>
                                <p>Date of Birth: {moment(report.date_of_birth).format('DD/MM/YYYY')}</p>
                                <p>Age: {report.age} {report.age_units_type}</p>
                                <p>Gender: {report.gender_type}</p>
                                <p>Race: {report.race_type}</p>
                                <p>Allergies: {report.allergy}</p>
                                <p>Current Medications: {report.medication}</p>
                                <p>Previous Medical Conditions: {report.medical_conditions}</p>
                            </div>
                            <div className='symptoms'>
                                <h3>SYMPTOMS</h3>
                                <p>Symptom Onset: {moment(report.time_symptom_onset).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <p>Last Known Well: {moment(report.time_last_known_well).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <p>Chief Complaint Anatomic Location: {report.anatomic_location_type}</p>
                                <p>Chief Complaint Organ System: {report.organ_system_type}</p>
                                <p>Primary Symptom: {report.primary_symptom}</p>
                                <p>Other Associated Symptoms: {report.other_symptoms}</p>
                                <p>Provider's Primary Impression: {report.primary_impression_type}</p>
                                <p>Initial Patient Acuity: {report.initial_acuity_type}</p>
                                <p>Final Patient Acuity: {report.final_acuity_type}</p>
                            </div>
                            <div className='vitals'>
                                <h3>VITALS</h3>

                                {vit && vit.length != 0 ?
                                    <div>

                                        <div>

                                            <TableContainer className={classes.vitals}>
                                                <Table size='small' options={{
                                                    rowStyle: {
                                                        fontSize: 2,
                                                    }
                                                }}>
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
                                                        {vit.map((item, index) => {
                                                            return (
                                                                <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                                                    <TableCell>{moment(item.vitals_timestamp).format('DD/MM/YYYY')}</TableCell>
                                                                    <TableCell>{moment(item.vitals_timestamp).format('hh:mm:ss')}</TableCell>
                                                                    <TableCell>{item.systolic_bp}</TableCell>
                                                                    <TableCell>{item.heart_rate}</TableCell>
                                                                    <TableCell>{item.pulse_oximetry}</TableCell>
                                                                    <TableCell>{item.respiratory_rate}</TableCell>
                                                                    <TableCell>{item.blood_glucose}</TableCell>
                                                                    <TableCell>{item.glasgow_eye}</TableCell>
                                                                    <TableCell>{item.glasgow_verbal}</TableCell>
                                                                    <TableCell>{item.glasgow_motor}</TableCell>
                                                                    <TableCell>{item.glasgow_qualifier}</TableCell>


                                                                    <TableCell>{item.responsiveness_level}</TableCell>
                                                                    <TableCell>{item.pain_scale}</TableCell>
                                                                    <TableCell>{item.stroke_score}</TableCell>
                                                                    <TableCell>{item.stroke_scale}</TableCell>
                                                                </TableRow>
                                                            )
                                                        })}
                                                    </TableBody>
                                                </Table>

                                            </TableContainer>
                                        </div>

                                    </div>
                                    :
                                    <p>None</p>
                                }

                            </div>
                            <div className='injury'>
                                <h3>INJURY</h3>
                                {report.injury_cause_type && report.injury_location_type ?
                                    <div>
                                        <p>Type: {report.injury_location_type}</p>
                                        <p>Cause: {report.injury_cause_type}</p>
                                    </div>
                                    :
                                    <p>None</p>

                                }
                            </div>



                            <div className='cardiac'>
                                <h3>CARDIAC ARREST</h3>
                                <p>Cardiac Arrest? {report.cardiac_arrest_type}</p>
                                {report.time_cardiac_arrest &&
                                    <div>
                                        <p>Date: {moment(report.time_cardiac_arrest).format('DD/MM/YYYY')}</p>
                                        <p>Time: {moment(report.time_cardiac_arrest).format('hh:mm:ss')}</p>

                                        <p>Etiology: {report.cardiac_arrest_etiology_type}</p>
                                        <p>Resuscitation Attempted by EMS: {report.resuscitation_attempt_type}</p>
                                        <p>Arrest Witnessed By: {report.cardiac_arrest_witness_type}</p>
                                        <p>AED Use Prior to EMS Arrival? {report.aed_use_prior_type}</p>
                                        <p>Type of CPR Provided: {report.cpr_provided_type}</p>
                                        <p>Return of Spontaneous Circulation? {report.spontaneous_circulation_type}</p>
                                        <p>Reason for Stopping CPR/Resuscitation: {report.cpr_stopped_type}</p>
                                        <p>Who First Initiated CPR? {report.aed_initiator_type}</p>
                                        <p>Who First Applied AED? {report.aed_applicator_type}</p>
                                        <p>Who First Defibrillated the Patient? {report.aed_defibrillator_type}</p>
                                    </div>


                                }



                            </div>

                            <div className='treatment'>
                                <h3>TREATMENT</h3>

                                <h4>Medications Administered:</h4>
                                {med && med.length != 0 ?
                                    <div>


                                        <TableContainer className={classes.vitals}>
                                            <Table size='small' options={{
                                                rowStyle: {
                                                    fontSize: 2,
                                                }
                                            }}>
                                                <TableHead>
                                                    <TableRow >
                                                        <TableCell size="small">Date</TableCell>
                                                        <TableCell>Time</TableCell>
                                                        <TableCell>Medication</TableCell>
                                                        <TableCell>Administered Route</TableCell>
                                                        <TableCell>Dosage</TableCell>
                                                        <TableCell>Dosage Units</TableCell>
                                                        <TableCell>Response to Medication</TableCell>
                                                        <TableCell>Role/Type of Person Administering Medication</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {med.map((item, index) => {
                                                        return (
                                                            <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                                                <TableCell>{moment(item.med_timestamp).format('DD/MM/YYYY')}</TableCell>
                                                                <TableCell>{moment(item.med_timestamp).format('hh:mm:ss')}</TableCell>
                                                                <TableCell>{item.med_name}</TableCell>
                                                                <TableCell>{item.med_admin_route_type}</TableCell>
                                                                <TableCell>{item.med_dosage}</TableCell>
                                                                <TableCell>{item.med_dosage_units}</TableCell>
                                                                <TableCell>{item.med_response}</TableCell>
                                                                <TableCell>{item.med_admin_by_type}</TableCell>

                                                            </TableRow>
                                                        )
                                                    })}
                                                </TableBody>
                                            </Table>

                                        </TableContainer>



                                    </div>
                                    :
                                    <p>None</p>
                                }

                                <h4>Procedures Administered:</h4>
                                {pro && pro.length != 0 ?
                                    <div>
                                        <TableContainer className={classes.vitals}>
                                            <Table size='small' options={{
                                                rowStyle: {
                                                    fontSize: 2,
                                                }
                                            }}>
                                                <TableHead>
                                                    <TableRow >
                                                        <TableCell size="small">Date</TableCell>
                                                        <TableCell>Time</TableCell>
                                                        <TableCell>Procedure</TableCell>
                                                        <TableCell># of Procedure Attempts</TableCell>
                                                        <TableCell>Procedure Successful?</TableCell>
                                                        <TableCell>Response to Procedure</TableCell>
                                                        <TableCell>Role/Type of Person Performing Procedure</TableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {pro.map((item, index) => {
                                                        return (
                                                            <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>


                                                                <TableCell>{moment(item.procedure_timestamp).format('DD/MM/YYYY')}</TableCell>
                                                                <TableCell>{moment(item.procedure_timestamp).format('hh:mm:ss')}</TableCell>
                                                                <TableCell>{item.procedure_name}</TableCell>
                                                                <TableCell>{item.procedures_attempted}</TableCell>
                                                                <TableCell>{item.procedure_successful}</TableCell>
                                                                <TableCell>{item.procedure_response}</TableCell>
                                                                <TableCell>{item.procedure_performer}</TableCell>

                                                            </TableRow>
                                                        )
                                                    })}
                                                </TableBody>
                                            </Table>

                                        </TableContainer>



                                    </div>

                                    :
                                    <p>None</p>
                                }
                            </div>
                            <div className='disposition'>
                                <h3>DISPOSITION</h3>
                                <p>Transport Disposition: {report.transport_disposition_type}</p>
                                {report.destination_state &&
                                    <div>
                                        <p>Destination State: {report.destination_state}</p>
                                        <p>Destination County: {report.destination_county}</p>
                                        <p>Destination Zip: {report.destination_zip}</p>
                                        <p>Transport Method: {report.transport_method_type}</p>
                                        <p>Transport Mode from Scene: {report.transport_mode_type}</p>
                                        <p>Type of Destination: {report.destination_facility_type}</p>
                                    </div>
                                }

                            </div>
                            <div className='summary'>
                                <h3>SUMMARY</h3>
                                <p>{report.incident_summary}</p>
                            </div>






                        </div>
                    </Box>
                </Grid>

            </Grid >
        </Container >
    )
}

export default FinalReport;