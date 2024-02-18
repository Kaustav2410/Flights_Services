// This code is a definition of a Sequelize model for a City in a database. Sequelize is a Node.js ORM (Object-Relationalapping) library foring with relational databases. The code starts by importing the Model class from Sequelize, which is used to define the City model. The model is then exported as a function that takes in a sequelize object and the DataTypes object from Sequelize.

// The City model is defined using the init method of the Model class. It has two properties: name and createdAt. The name property is a required string field, and it is also unique, meaning that no two cities can have the same name. The createdAt property is a timestamp field that is automatically set when a new city is created.

// The associate method is used to define any relationships between the City model and other models in the application. In this case, it is left empty, indicating that there are no relationships defined yet.

// Finally, the City model is returned from the function for use in other parts of the application.
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Airport,{  
        foreignKey:'cityId'
      })
    }
  }
  City.init({
    name: DataTypes.STRING,
    allowNull: false,
    unique:true,
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};