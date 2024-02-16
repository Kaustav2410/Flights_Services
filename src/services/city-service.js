const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/error-codes');

const cityRepository = new CityRepository();
async function createCity(data){
    try {
        const city = cityRepository.create(data);
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

async function getAirplanes(){
    try{
        const airplanes= await airplaneRepository.getAll();
        return airplanes;
    }
    catch(err){
        throw new AppError("Cannot fetch details of the airplanes",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function getAirplane(id){
    try{
        const airplane= await airplaneRepository.get(id);
        return airplane;
    }
    catch(err){
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not found",StatusCodes.NOT_FOUND);  
        }
        throw new AppError("Cannot fetch details of the specific airplane",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

async function destroyAirplane(id){
    try{
        const airplane= await airplaneRepository.destroy(id);
        return airplane;
    }
    catch(err){
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested to delete is not found",StatusCodes.NOT_FOUND);  
        }
        throw new AppError("Cannot fetch details of the specific airplane",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function updateAirplane(data,id) {
    try {
        const airplane = await airplaneRepository.update(data,id);
        return airplane;
    } catch (err) {
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested to delete is not found",StatusCodes.NOT_FOUND);  
        }
            throw new AppError("Cannot fetch details of the specific airplane to update",StatusCodes.INTERNAL_SERVER_ERROR); 
        }   
}
module.exports={ 
    createCity,
    // getAirplanes,
    // getAirplane,
    // destroyAirplane,
    // updateAirplane
}