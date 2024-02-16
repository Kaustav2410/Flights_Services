const { AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');
/* 
    POST:/airplanes 
    req-body {modelNumber:'airBus326' , capacity:200}
*/
async function  createAirplane (req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"successfully create an airplane",
            data:airplane,
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong while creating the airplane entry",
            data:{},
            error:error
        });
    }
}

async function getAirplanes(req,res){
    try{
        const airplanes = await AirplaneService.getAirplanes();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"successfully fetched the details of all the  airplanes",
            data:airplanes,
            error:{}
        })
    }
    catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong while creating the airplane entry",
            data:{},
            error:error
        });
    }
    
}
module.exports = {
     createAirplane,
     getAirplanes
}