const CrudRepository = require('./crud-repo');
const {flight} = require('../models');

class FlightsRepository extends CrudRepository{
    constructor(){
        super(flight);
        // Calls the parent 's constructor with the model that we want to use.
        // crud repo which provides basic CRUD operations and since we want to use those operations on the airplane model inherit crud repo
    }
}
module.exports=FlightsRepository; 