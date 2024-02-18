const { StatusCodes, NOT_FOUND } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/error-codes');

const cityRepository = new CityRepository();
async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        // console.log(error);
        if(error.name=='SequelizeValidationError' || error.name=='SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST); 
        }
        throw new AppError("Cannot create a new city object",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

async function deleteCity(id){
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError("City with the given id not found ",StatusCodes.BAD_REQUEST); 
        }
        throw new AppError("Cannot fetch the details of the specific city",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
module.exports={ 
    createCity,
    deleteCity
}