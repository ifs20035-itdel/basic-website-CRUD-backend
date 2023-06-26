const Pool = require('pg').Pool;


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "simple_app",
  password: "",
  port: 5432,
})

module.exporst = pool;