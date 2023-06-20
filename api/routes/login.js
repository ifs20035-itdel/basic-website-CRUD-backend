const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.status(200).json({
    statusCode: 200,
    message: "Connected to login POST"
  });
}); 

router.get('/', (req, res, next) => {
  res.status(200).json({
    statusCode: 200,
    message: "Connected to login GET"
  });
}); 


module.exports = router;