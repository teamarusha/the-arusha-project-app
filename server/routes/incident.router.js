const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// ____________________POST THE INCIDENT FORM____________________
router.post('/', rejectUnauthenticated, async (req, res) => {
    // IMPORTANT VARIABLES FOR A QUERY
    // const user = req.user.id
    // const sampleStamp = '2021-03-23 12:23:33';
    // const patients = req.body.patients;

    // const connection = await pool.connect();


    // try {
    //     // THE ORDER FOR BIG INSERT STATEMENT
    //     // incident
    //     const incidentQuery = {
    //         user_id: user,
    //         incident_type_id: 5,
    //         crew_id: 1,
    //         triage_cat_id: 2,
    //         unit_notified: sampleStamp,
    //         unit_enroute: sampleStamp,
    //         unit_arrived_scene: sampleStamp,
    //         arrived_patient: sampleStamp,
    //         unit_left_scene: sampleStamp,
    //         arrived_destination: sampleStamp,
    //         transfer_of_care: sampleStamp,
    //         unit_in_service: sampleStamp,
    //         incident_summary: "It went well"

    //     };

    //     await connection.query('BEGIN');
    //     const incidentInsertResults = await client.query(`
    //     INSERT INTO incident ("user_id","incident_type_id","crew_id","triage_cat_id",
    //     "unit_notified","unit_enroute","unit_arrived_scene","arrived_patient",
    //     "unit_left_scene","arrived_destination","transfer_of_care","unit_in_service",
    //     "incident_summary")
    //     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    //     RETURNING id;`,
    //         [
    //             incidentQuery.user_id,
    //             incidentQuery.incident_type_id,
    //             incidentQuery.crew_id,
    //             incidentQuery.triage_cat_id,
    //             incidentQuery.unit_notified,
    //             incidentQuery.unit_enroute,
    //             incidentQuery.unit_arrived_scene,
    //             incidentQuery.arrived_patient,
    //             incidentQuery.unit_left_scene,
    //             incidentQuery.arrived_destination,
    //             incidentQuery.transfer_of_care,
    //             incidentQuery.unit_in_service,
    //             incidentQuery.incident_summary
    //         ]);

    //     // ANOTHER VERY IMPORTANT PARAMETER
    //     const incidentID = incidentInsertResults[0].id;

    //     // scene
    //     const sceneQuery = {
    //         incident_scene_id: incidentID,
    //         incident_state: "Minnesota",
    //         incident_zip: 55409,
    //         incident_county: "Hennepin",
    //         possible_injury_id: 3,
    //         alcohol_drug_use_id: 5
    //     };

    //     await connection.query(`
    //     INSERT INTO scene ("incident_scene_id","incident_state","incident_zip","incident_county",
    //     "possible_injury_id","alcohol_drug_use_id")
    //     VALUES ($1, $2, $3, $4, $5, $6);`,
    //         [
    //             sceneQuery.incident_scene_id,
    //             sceneQuery.incident_state,
    //             sceneQuery.incident_zip,
    //             sceneQuery.incident_county,
    //             sceneQuery.possible_injury_id,
    //             sceneQuery.alcohol_drug_use_id
    //         ]);
    //     // disposition
    //     const dispositionQuery = {
    //         incident_disposition_id: incidentID,
    //         destination_state: "Minnesota",
    //         destination_zip: 55044,
    //         destination_county: "Dakota",
    //         transport_disposition_id: 2,
    //         transport_method_id: 2,
    //         transport_mode_id: 3,
    //         destination_type_id: 2
    //     };

    //     await connection.query(`
    //     INSERT INTO disposition ("incident_disposition_id","destination_state",
    //     "destination_zip","destination_county", "transport_disposition_id",
    //     "transport_method_id", "transport_mode_id","destination_type_id")
    //     VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
    //         [
    //             dispositionQuery.incident_disposition_id,
    //             dispositionQuery.destination_state,
    //             dispositionQuery.destination_zip,
    //             dispositionQuery.destination_county,
    //             dispositionQuery.transport_disposition_id,
    //             dispositionQuery.transport_method_id,
    //             dispositionQuery.transport_mode_id,
    //             dispositionQuery.destination_type_id
    //         ]);
    //     // patient
    //     const patientQuery = `INSERT INTO patient ("patient_incident_id","patient_first_name",
    //             "patient_last_name","address", "home_county","home_state", "home_zip","gender_id",
    //             race_id, date_of_birth, age, age_units_id)
    //             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    //             RETURNING id;`
    //     await Promise.all(
    //         patients.patientArray.map((patient, i) => {

    //             let patientValues = [
    //                 patients[i].patient_incident_id,
    //                 patients[i].patient_first_name,
    //                 patients[i].patient_last_name,
    //                 patients[i].address,
    //                 patients[i].home_county,
    //                 patients[i].home_state,
    //                 patients[i].home_zip,
    //                 patients[i].gender_id,
    //                 patients[i].race_id,
    //                 patients[i].date_of_birth,
    //                 patients[i].age,
    //                 patients[i].age_units_id
    //             ];

    //             await connection.query(patientQuery, patientValues);


    //         })
    //     )


    //     // medicalConditions
    //     // currentMedications
    //     // allergies
    //     // symptoms
    //     // injury
    //     // cardiacArrest
    //     // medication
    //     // procedure
    //     // vitals

    //     // FOR FOR LOOPS ONLY - Patient, medication, procedure, vitals


    //     await connection.query('COMMIT')
    //     res.sendStatus(201);
    // } catch (error) {
    //     await connection.query('ROLLBACK')
    //     console.log('Error POST /api/incident', error);
    //     res.sendStatus(500);
    // } finally {
    //     connection.release()
    // }

});


module.exports = router;