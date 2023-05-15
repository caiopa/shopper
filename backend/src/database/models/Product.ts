import { DataTypes, Model } from 'sequelize'
import db from '.'

class Product extends Model {
  public code!: number
  public name!: string
  public cost_price!: string
  public sales_price!: number
}

Product.init(
  {
    code: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    cost_price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false
    },
    sales_price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false
    }
  },
  {
    modelName: 'products',
    tableName: 'products',
    timestamps: false,
    sequelize: db
  }
)

export default Product
