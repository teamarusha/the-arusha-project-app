const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// ____________________GET ALL DROPDOWNS____________________
router.get('/:table', (req, res) => {
    const queryText = `SELECT * FROM ${req.params.table};`
    pool
        .query(queryText)
        .then((results) => {
            res.send(results.rows);
        }).catch(err => {
            res.sendStatus(500);
            console.log('Error in GET /api/dropdown', err);

        })
});


module.exports = router;