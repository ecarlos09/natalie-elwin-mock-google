//Require express and create instance of router middleware
const express = require('express');
const router = express.Router();

//Import the Result class and set up route
const Result = require('../models/result');

router.get('/', (req, res) => {
    try {
        const resultsData = Result.all;
        console.log(res.send(resultsData));
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    };    
});

module.exports = router;