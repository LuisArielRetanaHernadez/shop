// express
const express = require('express');


// init app

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

module.exports = { app }
