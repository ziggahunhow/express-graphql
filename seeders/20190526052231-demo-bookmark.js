'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Bookmarks',
      [
        {
          title: 'Yahoo',
          url: 'https://tw.yahoo.com/',
          id: uuidv4(),
          UserId: '246e9175-4fad-405e-8e52-2ff6ab4e61cc',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookmarks', null, {});
  }
};
