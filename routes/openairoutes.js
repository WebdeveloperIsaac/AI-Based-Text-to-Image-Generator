const { json } = require('express');
const express = require('express');
const  { generateimage } = require('../controllers/openaicontroller');


const router = express.Router();

router.post('/generateimage',generateimage);

module.exports = router;