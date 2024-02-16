const {Logger} =require('../config');
const AppError = require('../utils/error-codes');
const {StatusCodes} =require('http-status-codes');
class CrudRepository {
    constructor(model){
        this.model=model;
    }

    // When we have mutliple tables and to perfrom crud operations on it instead of writing  same code for each table, we created a basic template which we will use later 
    // repositories directly interacts with the models 
    async create(data){
            // https://sequelize.org/docs/v7/querying/insert/
            const response= await this.model.create(data);
            return response;
    }
    async destroy(data){
            // https://sequelize.org/docs/v7/querying/delete/
            const response= await this.model.destroy({
                // If we see in the docs where takes a object as an arugment , it means that you can pass more than one condition to delete data from the database
                where:{
                    id:data 
                }
            });
            return response;
    }
    async get(data){
            // For query select
            // https://sequelize.org/docs/v7/querying/select-methods/
            const response= await this.model.findByPk(data);
            if(!response){
                throw new AppError("Cannot found airplane with the given id",StatusCodes.NOT_FOUND); 
            }
            // Find by primary key
            return response;
    } 
    async getAll(data){
            // For query select
            // https://sequelize.org/docs/v7/querying/select-methods/
            const response= await this.model.findAll();
            // Find all 
            return response;
    }
    async update(id,data){
            // data is the object which consists of fields to be updated and their new values
            // id consists of the condition where to apply the changes 
            // https://sequelize.org/docs/v7/querying/select-methods/
            const response= await this.model.update(data,{
                id:id
            }); 
            return response;
    }                                                               
}
// Can run raw queries too 
module.exports = CrudRepository;