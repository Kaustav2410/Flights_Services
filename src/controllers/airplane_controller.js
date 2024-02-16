const { AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse,ErrorResponse} = require('../utils/common');
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
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json({
            SuccessResponse
        })
    } catch (err) {
        ErrorResponse.error=err;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ErrorResponse
        });
    }
}

async function getAirplanes(req,res){
    try{
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data=airplanes;
        return res.status(StatusCodes.CREATED).json({
            SuccessResponse
        })
    } catch (err) {
        ErrorResponse.error=err;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ErrorResponse
        });
    }
    
}

async function getAirplane(req,res){
    try{
        const airplane = await AirplaneService.getAirplane(
            req.params.id
        );
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json({
            SuccessResponse
        })
    } catch (err) {
        ErrorResponse.error=err;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ErrorResponse
        });
    }
    
}

async function deleteAirplane(req,res){
    try{
        const airplane = await AirplaneService.destroyAirplane(
            req.params.id
        )
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.OK).json({
            SuccessResponse
        })
    }
    catch(err){
        ErrorResponse.error=err;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ErrorResponse
        })
    }
}
async function updateAirplane(req,res){
    try {
        const updatedAirplane= await AirplaneService.updateAirplane(
            {
                capacity:req.body.capacity,
                modelNumber:req.body.modelNumber
            },
            // data,
            req.params.id)
        SuccessResponse.data = updatedAirplane;
        return res.status(StatusCodes.OK).json({SuccessResponse})
        
    } catch (err) {
        ErrorResponse.error=err;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ErrorResponse
        })
    }
}
module.exports = {
     createAirplane,
     getAirplanes,
     getAirplane,
     deleteAirplane,
     updateAirplane
}