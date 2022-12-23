const express = require('express');

const router = express.Router();

const talkerRouter = require('./talkerRouter');
const talkerLoginRouter = require('./talkerLoginRouter');

router.use('/talker', talkerRouter);
router.use('/login', talkerLoginRouter);

module.exports = router;