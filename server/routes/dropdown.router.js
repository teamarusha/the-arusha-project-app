const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = "SELECT * FROM transport_disposition;"


  pool
      .query(queryText)
      .then((results) => {
        res.send(results.rows);
      }).catch(err => {
        res.sendStatus(500);
        console.log('Error in GET /api/dropdown', err);
  
      })
});

router.get('/:table', (req, res) => {
    // GET route code here
  
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');
    console.log('req.params.id in dropdowns router', req.params.id);
    
    
    
    const queryText = "SELECT * FROM $1;"
  
  
    pool
        .query(queryText, [req.params.table])
        .then((results) => {
          res.send(results.rows);
        }).catch(err => {
          res.sendStatus(500);
          console.log('Error in GET /api/dropdown', err);
    
        })
  });

module.exports = router;