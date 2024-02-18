// This code is a migration file for Sequelize, a popular promise-based Node.js ORM (Object Relational Mapper) for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. Migration files are used to modify the database schema over time, without destroying existing data.

// The defines a Cities table with the following columns:

// id: an auto-incrementing primary key of type INTEGER.
// name: a string column that cannot be null and must be unique.
// createdAt: a date column that cannot be null, used to record when the row was created.
// updatedAt: a date column that cannot be null, used to record when the row was last updated.
// The up function is used to create the Cities table in the database, while the down function is used to drop (delete) the Cities table if the migration is rolled back.

// The 'use strict' statement at the beginning of the file enables strict mode in JavaScript, which can help catch common programming errors.

// Overall, this code is a simple and straightforward way to create a new table in a database using Sequelize migrations.
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true 
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
    await queryInterface.dropTable('Cities');
  }
};