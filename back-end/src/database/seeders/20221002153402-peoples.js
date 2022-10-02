'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Peoples',
      [{
        id: 1,
        name: 'Gabriel Henrique Coelho Freitas',
        email: 'coelho.tibbers@gmail.com',
        birthDate: '03/12/1999',
        telephone: '(31) 99177-5264'
      },
      {
        id: 2,
        name: 'Joice Rosa Gomes',
        email: 'jchoyse@gmail.com',
        birthDate: '16/01/2003',
        telephone: '(31) 99288-8801'       
      },], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Peoples', null, {});
  }
};
