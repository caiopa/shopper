import dotenv from 'dotenv'
import { type Options } from 'sequelize'

dotenv.config()

const config: Options = {
  port: Number(process.env.MYSQL_PORT) ?? 3306,
  database: process.env.MYSQL_DATABASE ?? 'shopperDB',
  username: process.env.MYSQL_USER ?? 'root',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false
}

export default config
