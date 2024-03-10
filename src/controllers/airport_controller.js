const { AirportService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse,ErrorResponse} = require('../utils/common');
/* 
    POST:/airport 
    {
    name,code,address,cityId
    "name": "Netaji Subhash Chandra Bose International Airport",
    "code":"CCU",
    "address":"Airport Service Rd, International Airport, Dum Dum, Kolkata, West Bengal 700052",
    "cityId":10
}
*/
async function  createAirport (req, res) {
    try {
        // Using the  service to add a new airplane in the database 
        // Created basic functions in the airplane service section to increase the reusablility  of code.
        console.log(req.body.name,
            req.body.code,
            req.body.address,
            req.body.cityId,)
        const airport = await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId,
        })
        SuccessResponse.data=airport;
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

async function getAirports(req,res){
    try{
        const airports = await AirportService.getAirports();
        SuccessResponse.data=airports;
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

async function getAirport(req,res){
    try{
        const airport = await AirportService.getAirport(
            req.params.id
        );
        SuccessResponse.data=airport;
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

async function deleteAirport(req,res){
    try{
        const airport = await AirportService.destroyAirport(
            req.params.id
        )
        SuccessResponse.data=airport;
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
async function updateAirport(req,res){
    try {
        const updatedAirport= await AirportService.updateAirport(
            {
                name:req.body.name,
                code:req.body.code,
                address:req.body.address,
                cityId:req.body.cityId,
            },
            // data,
            req.params.id)
        SuccessResponse.data = updatedAirport;
        return res.status(StatusCodes.OK).json({SuccessResponse})
        
    } catch (err) {
        ErrorResponse.error=err;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ErrorResponse
        })
    }
}
module.exports = {
     createAirport,
     getAirports,
     getAirport,
     deleteAirport,
     updateAirport
}