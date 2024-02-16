// const { ClientErrorCodes } = require('../utils/error-codes');
const {StatusCodes}=require('http-status-codes');
const validateCreateRequest = (req, res, next) => {
    if(
        !req.body.modelNumber ||
        !req.body.capacity
        // !req.body.createdAt ||
        // !req.body.updatedAt
    ) {
        // if any of the body params is missing we come inside the if
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create airplane',
            err: 'Missing mandatory properties to create a airplane'
        });
    }

    next();
}

module.exports = {
    validateCreateRequest
}