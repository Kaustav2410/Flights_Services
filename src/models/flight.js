'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airport,{
        foreignKey:'deparatureAirportId',
      })
      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportId',
      })
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE',
      })
    }
  }
  flight.init({
    flightNumber:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    deparatureAirportId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrivalAirportId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    departureTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate: {
      type:DataTypes.STRING,
    },
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};