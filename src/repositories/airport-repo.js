const CrudRepository = require('./crud-repo');
const {Airport} = require('../models');

class AirportsRepository extends CrudRepository{
    constructor(){
        super(Airport);
        // Calls the parent 's constructor with the model that we want to use.
        // crud repo which provides basic CRUD operations and since we want to use those operations on the airplane model inherit crud repo
    }
}
module.exports=AirportsRepository; 