const express = require('express');
const app = express();



app.get('/', (req, res) => {res.send('Fake Google up and running!')});

module.exports = app;