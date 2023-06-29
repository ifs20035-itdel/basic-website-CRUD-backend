const pool = require('../../db');

const postUser = (req, res) => {
  return "Login"
};

const postRegis = (req, res) => {
  return "Register"
};

const getUser = (req, res) => {
  query("SELECT * FROM public.user", (error, result) =>{
    if(error) throw error;
    res.status(200).json(result.rows);
  });
};

module.exports = {
  postUser,
  postRegis,
  getUser,
};