const CrudRepository = require('./crud-repo');
const {Airplane} = require('../models');

class AirplanesRepository extends CrudRepository{
    constructor(){
        super(Airplane);
        // Calls the parent 's constructor with the model that we want to use.
        // crud repo which provides basic CRUD operations and since we want to use those operations on the airplane model inherit crud repo
    }
}
module.exports=AirplanesRepository; 