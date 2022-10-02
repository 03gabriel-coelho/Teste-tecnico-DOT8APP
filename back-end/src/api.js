const express = require('express');
const bodyParser = require('body-parser');
const peopleController = require('./controllers/peopleController');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/people' ,peopleController);

module.exports = app;