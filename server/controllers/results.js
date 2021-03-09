//Require express and create instance of router middleware
const express = require('express');
const router = express.Router();

//Import the Result class and set up route
const Result = require('../models/result');

router.get('/', (req, res) => {
    const resultsData = Result.all;
    res.send(resultsData);
});