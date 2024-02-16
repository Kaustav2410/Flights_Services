const CrudRepository = require('./crud-repo');
const {Airplane} = require('../models');

class AirplanesRepository extends CrudRepository{
    constructor(){
        super(Airplane);
        // Calls the parent 's constructor with the model that we want to use.
    }
}
module.exports=AirplanesRepository; 