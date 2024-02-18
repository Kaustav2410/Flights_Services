const express =require('express');

const {CityController}= require('../../controllers');
const {CityMiddlewares}=require('../../middlewares');
const router= express.Router();

// api/v1/city/ POST
router.post('/',CityMiddlewares.validateCityCreateRequest,
CityController.createCity);

// //api/v1/city/:id DELETE
router.delete('/:id',CityController.deleteCity);

// // api/v1/airplanes/:id PATCH
// router.patch('/:id',AirplaneController.updateAirplane);

module.exports=router;