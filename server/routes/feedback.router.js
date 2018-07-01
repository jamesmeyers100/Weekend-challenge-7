const express = require('express');
const router = express.Router();
// const pg = require('pg');
const pool = require('../modules/pool')

// POST feedback
router.post('/', (req, res) => {
    console.log(`in POST /feedback`, req.body);
    const feedback = req.body
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;

    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((result) => {
        console.log('post worked!')
        res.sendStatus(201)
    })
    .catch((error) =>{
        console.log('error POSTing to /feedback', error)
        alert('error posting data. call your dev team.')
        res.sendStatus(500)
    })
})

// GET feedback
router.get('/', (req, res) => {
    console.log('GET /feedback')
    const queryText = 'SELECT * FROM feedback';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    })
    .catch((error) => {
        console.log(`There's been an error with GET`, error)
    })
})

// DELETE feedback
router.delete('/:id', (req, res) => {
    console.log('DELETE /feedback', req.params.id);
    const id = req.params.id;
    console.log('In DELETE router');
    const queryText = 'DELETE FROM feedback WHERE id=$1';
    pool.query(queryText, [id])
      .then((results)=>{
        console.log('Successfully deleted');
        res.sendStatus(200);
      }).catch((err)=>{
        console.log('Error', err);
        res.sendStatus(500);
      })
});

module.exports = router;