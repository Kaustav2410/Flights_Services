const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const airplaneRepository = new AirplaneRepository();
const AppError = require('../utils/error-codes');
async function createAirplane(data){
    try {
        const airplane = airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if(error.name=='SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST); 
        }
        throw new AppError("Cannot create a new airplane object",StatusCodes.INTERNAL_SERVER_ERROR); 
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
module.exports={ 
    createAirplane,
    getAirplanes,
    getAirplane
}