const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
  adminAuth,
} = require('../modules/authentication-middleware');
// get report info for admin table display
router.get('/', adminAuth, (req, res) => {
  
    let queryText = `SELECT incident.unit_notified, patient.patient_first_name, patient.patient_last_name, "user".user_first_name, "user".user_last_name, patient.id FROM incident
    JOIN patient ON patient.patient_incident_id = incident.id
    JOIN "user" ON "user".id = incident.user_id ORDER BY incident.unit_notified`;
    pool.query(queryText).then(result => {
      // Sends back the results in an array
      res.send(result.rows);
    })
      .catch(error => {
        console.log('error getting reports', error);
        res.sendStatus(500);
      });
  });

  router.get('/:id', (req, res) => {
    let queryText = 
    `SELECT patient.*, gender.gender_type, race.race_type, incident.*, "user".user_first_name, "user".user_last_name, "user".region_id, 
      incident_service.incident_service_type, triage_cat.triage_cat_type, scene.*, possible_injury.possible_injury_type, 
      alcohol_drug_use.alcohol_drug_use_type, disposition.*, transport_disposition.transport_disposition_type, 
      transport_method.transport_method_type, transport_mode.transport_mode_type, destination_facility.destination_facility_type, 
      medicalconditions.*, currentmedication.*, allergies.*, symptoms.*, organ_system.organ_system_type, 
      anatomic_location.anatomic_location_type, initial_acuity.initial_acuity_type, final_acuity.final_acuity_type, 
      primary_impression.primary_impression_type, cardiacarrest.time_cardiac_arrest, cardiac_arrest.cardiac_arrest_type, 
      cardiac_arrest_etiology.cardiac_arrest_etiology_type, resuscitation_attempt.resuscitation_attempt_type, 
      cardiac_arrest_witness.cardiac_arrest_witness_type, aed_use_prior.aed_use_prior_type, cpr_provided.cpr_provided_type, 
      spontaneous_circulation.spontaneous_circulation_type, cpr_stopped.cpr_stopped_type, aed_initiator.aed_initiator_type, 
      aed_applicator.aed_applicator_type, aed_defibrillator.aed_defibrillator_type, 
    CASE WHEN count(med) = 0 THEN ARRAY[]::jsonb[] ELSE array_agg(DISTINCT to_jsonb(med.medication)) END AS med, 
    CASE WHEN count(inj) = 0 THEN ARRAY[]::jsonb[] ELSE array_agg(DISTINCT to_jsonb(inj.injury)) END AS inj, 
    CASE WHEN count(pro) = 0 THEN ARRAY[]::jsonb[] ELSE array_agg(DISTINCT to_jsonb(pro.procedure)) END AS pro, 
    CASE WHEN count(vit) = 0 THEN ARRAY[]::jsonb[] ELSE array_agg(DISTINCT to_jsonb(vit.vitals)) END AS vit FROM patient
    JOIN incident ON incident.id = patient.patient_incident_id
    JOIN incident_service ON incident_service.id = incident.incident_service_id
    JOIN triage_cat ON triage_cat.id = incident.triage_cat_id
    JOIN gender ON gender.id = patient.gender_id
    JOIN race ON race.id = patient.race_id
    JOIN age_units ON age_units.id = patient.age_units_id
    JOIN medicalconditions ON medicalconditions.patient_condition_id = patient.id
    JOIN currentmedication ON currentmedication.patient_current_med_id = patient.id
    JOIN allergies ON allergies.patient_allergy_id = patient.id
    JOIN symptoms ON symptoms.patient_symptoms_id = patient.id
    JOIN anatomic_location ON anatomic_location.id = symptoms.anatomic_location_id
    JOIN organ_system ON organ_system.id = symptoms.organ_system_id
    JOIN initial_acuity ON initial_acuity.id = symptoms.initial_acuity_id
    JOIN final_acuity ON final_acuity.id = symptoms.final_acuity_id
    JOIN primary_impression ON primary_impression.id = symptoms.primary_impression_id
    JOIN cardiacarrest ON cardiacarrest.patient_cardiac_id = patient.id
    JOIN cardiac_arrest ON cardiacarrest.cardiac_arrest_id = cardiac_arrest.id
    JOIN cardiac_arrest_etiology ON cardiac_arrest_etiology.id = cardiacarrest.cardiac_arrest_etiology_id
    JOIN resuscitation_attempt ON resuscitation_attempt.id = cardiacarrest.resuscitation_attempt_id
    JOIN cardiac_arrest_witness ON cardiac_arrest_witness.id = cardiacarrest.cardiac_arrest_witness_id
    JOIN aed_use_prior ON aed_use_prior.id = cardiacarrest.aed_use_prior_id
    JOIN cpr_provided ON cpr_provided.id = cardiacarrest.cpr_provided_id
    JOIN spontaneous_circulation ON spontaneous_circulation.id = cardiacarrest.spontaneous_circulation_id
    JOIN cpr_stopped ON cpr_stopped.id = cardiacarrest.cpr_stopped_id
    JOIN aed_initiator ON aed_initiator.id = cardiacarrest.aed_initiator_id
    JOIN aed_applicator ON aed_applicator.id = cardiacarrest.aed_applicator_id
    JOIN aed_defibrillator ON aed_defibrillator.id = cardiacarrest.aed_defibrillator_id
    JOIN "user" ON "user".id = incident.user_id
    JOIN scene ON scene.incident_scene_id = incident.id
    JOIN possible_injury ON possible_injury.id = scene.possible_injury_id
    JOIN alcohol_drug_use ON alcohol_drug_use.id = scene.alcohol_drug_use_id
    JOIN disposition ON disposition.patient_disposition_id = patient.id
    JOIN transport_disposition ON transport_disposition.id = disposition.transport_disposition_id
    JOIN transport_method ON transport_method.id = disposition.transport_method_id
    JOIN transport_mode ON transport_mode.id = disposition.transport_mode_id
    JOIN destination_facility ON destination_facility.id = disposition.destination_facility_id
    LEFT OUTER JOIN (
      SELECT patient_medication_id, json_build_object('med_name', med_name, 'med_admin_route_type', 
        med_admin_route.med_admin_route_type, 'med_admin_by_type', med_admin_by.med_admin_by_type, 'med_dosage', 
        med_dosage, 'med_dosage_units', med_dosage_units.med_dosage_units_type, 'med_response', 
        med_response.med_response_type, 'med_timestamp', med_timestamp) as medication FROM medication
      JOIN med_admin_route ON med_admin_route.id = medication.med_admin_route_id
      JOIN med_admin_by ON med_admin_by.id = medication.med_admin_by_id
      JOIN med_dosage_units ON med_dosage_units.id = medication.med_dosage_units_id
      JOIN med_response ON med_response.id = medication.med_response_id
        ) med ON med.patient_medication_id = patient.id
    LEFT OUTER JOIN (
      SELECT patient_injury_id, json_build_object('injury_location', injury_location_type, 'injury_cause', 
        injury_cause_type) as injury FROM injury
      JOIN injury_location ON injury_location.id = injury.injury_location_id
      JOIN injury_cause ON injury_cause.id = injury.injury_cause_id) inj ON inj.patient_injury_id = patient.id 
    LEFT OUTER JOIN (
      SELECT patient_procedure_id, json_build_object('procedure_name', procedure_list_type, 'procedures_attempted', 
        procedures_attempted_type, 'procedure_successful', procedure_successful_type, 'procedure_response', procedure_response_type, 
        'procedure_performer', procedure_performer_type, 'procedure_timestamp', procedure_timestamp) as procedure FROM procedure
      JOIN procedure_list ON procedure_list.id = procedure.procedure_name_id
      JOIN procedures_attempted ON procedures_attempted.id = procedure.procedure_attempts_id
      JOIN procedure_successful ON procedure_successful.id = procedure.procedure_successful_id
      JOIN procedure_response ON procedure_response.id = procedure.procedure_response_id
      JOIN procedure_performer ON procedure_performer.id = procedure.procedure_performer_id) pro ON pro.patient_procedure_id = patient.id
    LEFT OUTER JOIN(
      SELECT patient_vitals_id, json_build_object('systolic_bp', systolic_bp, 'heart_rate', heart_rate, 
        'pulse_oximetry', pulse_oximetry, 'respiratory_rate', respiratory_rate, 'blood_glucose', blood_glucose, 
        'glasgow_eye', glasgow_eye, 'glasgow_verbal', glasgow_verbal, 'glasgow_motor', glasgow_motor, 'glasgow_qualifier', 
        glasgow_qualifier, 'responsiveness_level', responsiveness_level_type, 'pain_scale', pain_scale_type, 'stroke_score', 
        stroke_score_type, 'stroke_scale', stroke_scale_type, 'vitals_timestamp', vitals_timestamp) as vitals FROM vitals 
      JOIN responsiveness_level ON responsiveness_level.id = vitals.responsiveness_level_id
      JOIN pain_scale ON pain_scale.id = vitals.pain_scale_id
      JOIN stroke_score ON stroke_score.id = vitals.stroke_score_id
      JOIN stroke_scale ON stroke_scale.id = vitals.stroke_scale_id) vit ON vit.patient_vitals_id = patient.id
    WHERE patient.id=$1
    GROUP BY patient.id, incident.id, incident_service.id, triage_cat.id, gender.id, race.id, age_units.id, 
      medicalconditions.id, currentmedication.id, allergies.id, symptoms.id, anatomic_location.id, organ_system.id, 
      initial_acuity.id, final_acuity.id, primary_impression.id, cardiacarrest.id, cardiac_arrest.id, cardiac_arrest_etiology.id, 
      resuscitation_attempt.id, cardiac_arrest_witness.id, aed_use_prior.id, cpr_provided.id, spontaneous_circulation.id, 
      cpr_stopped.id, aed_initiator.id, aed_applicator.id, aed_defibrillator.id, "user".id, scene.id, possible_injury.id, 
      alcohol_drug_use.id, disposition.id, transport_disposition.id, transport_method.id, transport_mode.id, destination_facility.id;`;
    pool.query(queryText, [req.params.id]).then(result => {
      // Sends back the results in an object
      res.send(result.rows[0]);
    })
      .catch(error => {
        console.log('error getting lists', error);
        res.sendStatus(500);
      });
  });

module.exports = router;
