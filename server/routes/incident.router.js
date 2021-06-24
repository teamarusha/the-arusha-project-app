const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// ____________________POST THE INCIDENT FORM____________________
router.post('/', rejectUnauthenticated, (req, res) => {
    // IMPORTANT VARIABLES FOR A QUERY
    const user = req.user.id
    const sampleStamp = '24/12/1992 10:00:05';

    const connection = await pool.connect();

    // THE ORDER FOR BIG INSERT STATEMENT
    // incident
    const incidentQuery = {
        user_id: user,
        incident_type_id: 5,
        crew_id: 1,
        triage_cat_id: 2,
        unit_notified: sampleStamp,
        unit_enroute: sampleStamp,
        unit_arrived_scene: sampleStamp,
        arrived_patient: sampleStamp,
        unit_left_scene: sampleStamp,
        arrived_destination: sampleStamp,
        transfer_of_care: sampleStamp,
        unit_in_service: sampleStamp,
        incident_summary: "It went well"

    }
    // scene
    // disposition
    // patient
    // medicalConditions
    // currentMedications
    // allergies
    // symptoms
    // injury
    // cardiacArrest
    // medication
    // procedure
    // vitals

    try {
        await client.query('BEGIN');
        const incidentInsertResults = await client.query(`
                INSERT INTO incident ("user_id","incident_type_id","crew_id","triage_cat_id",
                "unit_notified","unit_enroute","unit_arrived_scene","arrived_patient",
                "unit_left_scene","arrived_destination","transfer_of_care","unit_in_service",
                "incident_summary")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
                RETURNING id;`,
            [
                incidentQuery.user_id,
                incidentQuery.incident_type_id,
                incidentQuery.crew_id,
                incidentQuery.triage_cat_id,
                incidentQuery.unit_notified,
                incidentQuery.unit_enroute,
                incidentQuery.unit_arrived_scene,
                incidentQuery.arrived_patient,
                incidentQuery.unit_left_scene,
                incidentQuery.arrived_destination,
                incidentQuery.transfer_of_care,
                incidentQuery.unit_in_service,
                incidentQuery.incident_summary
            ]);
        // ANOTHER IMPORTANT PARAMETER
        const incidentID = incidentInsertResults[0].id
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/incident', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }

});


module.exports = router;