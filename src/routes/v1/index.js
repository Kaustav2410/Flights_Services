const express = require('express');
const router= express.Router();

const AirplaneController = require('./airplane_router');
const CityController  = require('./city_router');

router.use('/airplanes',AirplaneController);
router.use('/city',CityController);

module.exports=router;