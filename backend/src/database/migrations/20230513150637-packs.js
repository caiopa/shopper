'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('packs', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      pack_id: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      product_id: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      qty: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('packs')
  }
}
