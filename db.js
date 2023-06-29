const Pool = require('pg').Pool;
const express = require('express');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var app = express();


const pool = new Pool({
  user: app.get("DB_USERNAME"),
  host: app.get("DB_HOST"),
  database: app.get("DB_NAME"),
  password: app.get("DB_PASSWORD"),
  port: app.get("DB_PORT"),
})

console.log(pool.database)

module.exporst = pool;