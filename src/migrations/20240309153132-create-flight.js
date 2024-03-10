'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        // Dont have to explicitly mention it's a foreign key
        // https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-createTable
        references:{
          model: 'Airplanes',
          key:'id'
        },
        onDelete:'CASCADE',
      },
      deparatureAirportId: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model: 'Airports',
          key:'code'
        },
        onDelete:'CASCADE',
      },
      arrivalAirportId: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model: 'Airports',
          key:'code'
        },
        onDelete:'CASCADE',
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};