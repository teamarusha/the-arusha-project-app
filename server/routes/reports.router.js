const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//get report info for admin table display
// router.get('/', (req, res) => {
  
//     let queryText = `SELECT i.unit_notified, p.first_name, p.last_name, u.first_name, u.last_name, p.id FROM incident i 
//     JOIN patient p ON p.patient_incident_id = i.id
//     JOIN "user" u ON u.id = i.user_id; ORDER BY i.unit_notified`;
//     pool.query(queryText).then(result => {
//       // Sends back the results in an array
//       res.send(result.rows);
//     })
//       .catch(error => {
//         console.log('error getting reports', error);
//         res.sendStatus(500);
//       });
//   });

module.exports = router;
