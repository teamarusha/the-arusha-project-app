const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
  adminAuth,
} = require('../modules/authentication-middleware');
// get report info for admin table display
router.get('/', adminAuth(), (req, res) => {
  
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

module.exports = router;
