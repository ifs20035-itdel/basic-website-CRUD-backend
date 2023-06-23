const express = require('express')
const loginRoute = require('./api/auth/login')
const app = express();

app.use('/auth/login', loginRoute);

module.exports = app;