const http = require('http');
const app = require('./app');
const mongoose = require('mongoose')
require('dotenv').config()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const server = http.createServer(app);

mongoose.connect(process.env.DATABSE_URL, { useNewUrlParser: true });
const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', error => console.log('Connected to Database'))

server.listen(port);