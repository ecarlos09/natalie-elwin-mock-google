//Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Create new instances of required modules
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Set up root route
app.get('/', (req, res) => {res.send('Fake Google up and running!')});

//Import the controllers
const resultRoutes = require("../server/controllers/results");
app.use('/results', resultRoutes);

//Set up individual quote route
app.get('/results:id', (req, res) => {
    res.send(resultRoutes[req.params.id]);
})

module.exports = app;