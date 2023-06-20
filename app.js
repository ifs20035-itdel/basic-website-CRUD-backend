const express = require('express')
const loginRoute = require('./api/routes/login')
const app = express();

app.use('/auth/login', loginRoute);

module.exports = app;