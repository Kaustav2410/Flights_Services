const express = require('express');
const router= express.Router();

const AirplaneController = require('./airplane_router')

router.use('/airplanes',AirplaneController)

module.exports=router;