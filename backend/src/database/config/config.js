require('dotenv').config()

module.exports = {
  port: Number(process.env.MYSQL_PORT) ?? 3306,
  database: process.env.MYSQL_DATABASE ?? 'shopperDB',
  username: process.env.MYSQL_USER ?? 'root',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false
}
