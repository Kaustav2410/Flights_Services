const CrudRepository = require('./crud-repo');
const {City} = require('../models');

class CityRepository extends CrudRepository{
    constructor(){
        super(City);
        // Calls the parent 's constructor with the model that we want to use.
    }
}
module.exports=CityRepository; 