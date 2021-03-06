//Require express and create instance of router middleware
const express = require('express');
const router = express.Router();

//Import the Result class and set up route
const Result = require('../models/result');

//Retrieve all results from data.js
router.get('/', (req, res) => {
    const resultsData = Result.all;
    res.send(resultsData);
});

//Retrieve a particular result
router.get('/results', (req, res) => {
    try {
        const resultId = parseInt(req.params.id);
        const selectedResult = Result.resultById(resultId);
        res.status(200).send(selectedResult);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});


module.exports = router;
