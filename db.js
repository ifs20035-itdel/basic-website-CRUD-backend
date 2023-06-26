const Pool = require('pg').Pool;
const express = require('express');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var app = express();


const pool = new Pool({
  user: app.get("user"),
  host: app.get("host"),
  database: app.get("db"),
  password: app.get("pwd"),
  port: app.get("port"),
})

module.exporst = pool;