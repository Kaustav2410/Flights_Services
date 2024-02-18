// const { ClientErrorCodes } = require('../utils/error-codes');
const {StatusCodes}=require('http-status-codes');
const validateCityCreateRequest = (req, res, next) => {
    if(
        !req.body.name
        // !req.body.createdAt ||
        // !req.body.updatedAt
    ) {
        // if any of the body params is missing we come inside the if
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for creation of city',
            err: 'Missing mandatory properties to create a city '
        });
    }

    next();
}

module.exports = {
    validateCityCreateRequest,
}