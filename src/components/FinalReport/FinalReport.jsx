import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Card, Container } from '@material-ui/core';
import moment from 'moment';

function FinalReport() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();


    const report = useSelector(store => store.report);
    console.log('report:', report.med)
    const med = report.med
    const vit = report.vit
    const inj = report.inj
    const pro = report.pro

    // console.log('med name insulin:',med.med_name)
    useEffect(() => {
        console.log('in useEffect param:', id)
        dispatch({ type: 'FETCH_REPORT', payload: id })
    }, []);


    return (
        // <p>{JSON.stringify(report)}</p>
        <Container>
            <Card>
                <div class='header'>
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
                <div class='scene'>
                    <h3>SCENE</h3>
                    <p># of Patients at Scene: </p>
                    <p>Incident State: {report.incident_state}</p>
                    <p>Incident County: {report.incident_county}</p>
                    <p>Incident Zip: {report.incident_zip}</p>
                    <p>Possible Injury? {report.possible_injury_type}</p>
                    <p>Alcohol/Drug Use Indicators: {report.alcohol_drug_use_type}</p>
                </div>
                <div class='patient'>
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
                <div class='symptoms'>
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
                <div class='vitals'>
                    <h3>VITALS</h3>
                    {vit && (
                        <p>
                            {vit.map((item, index) => {
                                return (
                                    <>
                                        <h5>Vitals {index + 1}</h5>
                                        <ul>
                                            <li>Date: {moment(item.vitals_timestamp).format('DD/MM/YYYY')}</li>
                                            <li>Time: {moment(item.vitals_timestamp).format('hh:mm:ss')}</li>
                                            <li>SBP: {item.systolic_bp}</li>
                                            <li>Heart Rate: {item.heart_rate}</li>
                                            <li>Pulse Oximetry: {item.pulse_oximetry}</li>
                                            <li>Respiratory Rate: {item.respiratory_rate}</li>
                                            <li>Blood Glucose Level: {item.blood_glucose}</li>
                                            <li>Glasgow Coma Score:
                                            <ul>
                                                    <li>Eye: {item.glasgow_eye}</li>
                                                    <li>Verbal: {item.glasgow_verbal}</li>
                                                    <li>Motor: {item.glasgow_motor}</li>
                                                    <li>Score Qualifier: {item.glasgow_qualifier}</li>
                                                </ul>
                                            </li>
                                            <li>Level of Responsiveness (AVPU): {item.responsiveness_level}</li>
                                            <li>Pain Scale Score: {item.pain_scale}</li>
                                            <li>Stroke Scale Score: {item.stroke_score}</li>
                                            <li>Stroke Scale Type: {item.stroke_scale}</li>
                                        </ul>
                                    </>
                                )
                            })}
                        </p>
                    )}

                </div>
                <div class='injury'>
                    <h3>INJURY</h3>
                    {inj && (
                        <p>
                            {inj.map((item, index) => {
                                return (
                                    <>
                                        <h5>Injury {index + 1}</h5>
                                        <p>Type: {item.injury_location}</p>
                                        <p>Cause: {item.injury_cause}</p>
                                    </>

                                )
                            })}
                        </p>
                    )}
                </div>
                <div class='disposition'>
                    <p></p>
                </div>
                <div class='cardiac'>
                    <h3>CARDIAC ARREST</h3>
                    <p>Cardiac Arrest? {report.cardiac_arrest_type}</p>
                    {/* if cardiac arrest id = 1 ? */}
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

                <div class='treatment'>
                    <h3>TREATMENT</h3>
                    <h4>Medications Administered:</h4>
                    {med && (
                        <p>
                            {med.map((item, index) => {
                                return (
                                    <>
                                        <h5>Medication {index + 1}</h5>
                                        <ul>
                                            <li>Date: {moment(item.med_timestamp).format('DD/MM/YYYY')}</li>
                                            <li>Time: {moment(item.med_timestamp).format('hh:mm:ss')}</li>
                                            <li>Medication: {item.med_name}</li>
                                            <li>Administered Route: {item.med_admin_route_type}</li>
                                            <li>Dosage: {item.med_dosage} {item.med_dosage_units}</li>
                                            <li>Response to Medication: {item.med_response}</li>
                                            <li>Role/Type of Person Administering Medication: {item.med_admin_by_type}</li>
                                        </ul>
                                    </>
                                )
                            })}
                        </p>
                    )}

                    <h4>Procedures Administered:</h4>
                    {pro && (
                        <p>
                            {pro.map((item, index) => {
                                return (
                                    <>
                                        <h5>Procedure {index + 1}</h5>
                                        <ul>
                                            <li>Date: {moment(item.procedure_timestamp).format('DD/MM/YYYY')}</li>
                                            <li>Time: {moment(item.procedure_timestamp).format('hh:mm:ss')}</li>
                                            <li>Procedure: {item.procedure_name}</li>
                                            <li># of Procedure Attempts: {item.procedures_attempted}</li>
                                            <li>Procedure Successful?  {item.procedure_successful}</li>
                                            <li>Response to Procedure: {item.procedure_response}</li>
                                            <li>Role/Type of Person Performing Procedure: {item.procedure_performer}</li>
                                        </ul>
                                    </>
                                )
                            })}
                        </p>
                    )}
                </div>
                <div class='disposition'>
                <h3>DISPOSITION</h3>
                    <p>Destination State: {report.destination_state}</p>
                    <p>Destination County: {report.destination_county}</p>
                    <p>Destination Zip: {report.destination_zip}</p>
                    <p>Transport Disposition: {report.transport_disposition_type}</p>
                    <p>Transport Method: {report.transport_method_type}</p>
                    <p>Transport Mode from Scene: {report.transport_mode_type}</p>
                    <p>Type of Destination: {report.destination_facility_type}</p>
                </div>
                <div class='summary'>
                <h3>SUMMARY</h3>
                <p>{report.incident_summary}</p>
                </div>







            </Card>
        </Container>
    )
}

export default FinalReport;