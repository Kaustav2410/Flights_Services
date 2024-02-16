const { CityService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse,ErrorResponse} = require('../utils/common');
/* 
    POST:/city 
    req-body {name:'delhi'}
*/
async function  createCity (req, res) {
    try {
        const city = await CityService.createCity({
            name:req.body.name,
        })
        SuccessResponse.data=city;
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
module.exports={
    createCity
}