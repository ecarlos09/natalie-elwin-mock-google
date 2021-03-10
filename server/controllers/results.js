//Require express and create instance of router middleware
const express = require('express');
const router = express.Router();

//Import the Result class and set up route
const Result = require('../models/result');

//Retrieve all results from data.js
router.get('/', (req, res) => {
    // try {
    //     const resultsData = Result.all;
    //     console.log(res.send(resultsData));
    // } catch (err) {
    //     console.log(err);
    //     res.status(404).send(err);
    // };
    const resultsData = Result.all;
    res.send(resultsData);
});

//Retrieve a particular result
router.get('/:id', (req, res) => {
    try {
        const resultId = parseInt(req.params.id);
        console.log(resultId);
        const selectedResult = Result.resultById(resultId);
        res.send(selectedResult);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});


module.exports = router;