// This code is a JavaScript module that exports a class named CrudRepository which provides basic CRUD (Create, Read, Update, Delete) operations for a given database model. The class takes a database model as a constructor argument and provides methods to interact with the model.

// The create method takes data as an argument and creates a new record in the database using the create method of the Sequelize model. It returns the newly created record.

// The destroy method takes data as an argument and deletes a record from the database using the destroy method of the Sequelize model. It takes an object with a where property that specifies the condition for deletion. If no record is found with the given condition, it throws an error using the AppError class.

// The code uses the http-status-codes package to define the HTTP status code for the error. The config and errors/error-codes modules are imported but not used in this code.

// Overall, this code provides a basic template for CRUD operations that can be reused for different database models, reducing code duplication and improving maintainability.
const {Logger} =require('../config');
const AppError = require('../utils/errors/error-codes');
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
            if(!response){
                throw new AppError("Cannot found item with the given id",StatusCodes.NOT_FOUND); 
            }
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
    async getAll(){
            // For query select
            // https://sequelize.org/docs/v7/querying/select-methods/
            const response= await this.model.findAll();
            // Find all 
            return response;
    }
    async update(data,id){
            // data is the object which consists of fields to be updated and their new values
            // id consists of the condition where to apply the changes 
            // https://sequelize.org/docs/v7/querying/select-methods/
            const response= await this.model.update(data,{
                where:{
                    id:id
                }
            }
            ); 
            if(!response){
                throw new AppError("Cannot found airplane with the given id",StatusCodes.NOT_FOUND); 
            }
            return response;
    }                                                               
}
// Can run raw queries too 
module.exports = CrudRepository;