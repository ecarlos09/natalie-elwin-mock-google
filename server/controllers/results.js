//Require express and create instance of router middleware
const express = require('express');
const { route } = require('../app');
const router = express.Router();

//Import the Result class and set up route
const Result = require('../models/result');

//Retrieve all results from data.js
router.get('/', (req, res) => {
    try {
        const resultsData = Result.all;
        console.log(res.send(resultsData));
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    };    
});

//Retrieve a particular result



module.exports = router;