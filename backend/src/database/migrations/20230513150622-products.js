'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      cost_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2)
      },
      sales_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2)
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('products')
  }
}
