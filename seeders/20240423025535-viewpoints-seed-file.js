'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Viewpoints', [{ 
      name: '淺草寺',
      address: "東京都",
      image: 'www.abc.com',
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: '白宮',
      address: "華盛頓",
      image: 'www.abc.com',
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('Viewpoints', {})
  }
};
