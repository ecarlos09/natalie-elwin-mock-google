//Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Create new instances of required modules
const app = express();
// app.use(bodyParser.json());
app.use(cors());

//Import the controllers
const resultRoutes = require("../server/controllers/results");
app.use('/results', resultRoutes);

app.get('/', (req, res) => {res.send('Fake Google up and running!')});

module.exports = app;