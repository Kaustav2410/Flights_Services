const { StatusCodes } = require('http-status-codes');
const {AirportRepository} = require('../repositories');
const AppError = require('../utils/errors/error-codes');

const airportRepository = new AirportRepository();
async function createAirport(data){
    try {
        const airport = airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name=='SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST); 
        }
        throw new AppError("Cannot create a new airport object",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

async function getAirports(){
    try{
        const airports= await airportRepository.getAll();
        return airports;
    }
    catch(err){
        throw new AppError("Cannot fetch details of the airports",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function getAirport(id){
    try{
        const airport= await airportRepository.get(id);
        return airport;
    }
    catch(err){
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested is not found",StatusCodes.NOT_FOUND);  
        }
        throw new AppError("Cannot fetch details of the specific airport",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

async function destroyAirport(id){
    try{
        const airport= await airportRepository.destroy(id);
        return airport;
    }
    catch(err){
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested to delete is not found",StatusCodes.NOT_FOUND);  
        }
        throw new AppError("Cannot delete the specific airplane",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function updateAirport(data,id) {
    try {
        const airport = await airportRepository.update(data,id);
        return airport;
    } catch (err) {
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested to update is not found",StatusCodes.NOT_FOUND);  
        }
            throw new AppError("Cannot fetch details of the specific airport to update",StatusCodes.INTERNAL_SERVER_ERROR); 
        }   
}
module.exports={ 
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}