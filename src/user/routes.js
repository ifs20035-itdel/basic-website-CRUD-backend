const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.post('/user', controller.postUser);
router.get('/user', controller.getUser);
router.post('/register', controller.postRegis);


module.exports = router;