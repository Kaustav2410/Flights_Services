const {StatusCodes}=require('http-status-codes');
const validateCreateRequest = (req, res, next) => {
    if(
        !req.body.name ||
        !req.body.code || 
        !req.body.address ||
        !req.body.cityId
    ) {
        // if any of the body params is missing we come inside the if
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for creation of airport',
            err: 'Missing mandatory properties to create an airport'
        });
    }

    next();
}


module.exports = {
    validateCreateRequest,
}