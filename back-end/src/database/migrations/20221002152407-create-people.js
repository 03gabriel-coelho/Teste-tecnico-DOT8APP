'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Peoples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,       
      },
      birthDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telephone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    }, {
      timestamps: false,
      underscored: true,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Peoples');
  }
};
