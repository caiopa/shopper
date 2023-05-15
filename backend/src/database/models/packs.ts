import { DataTypes, Model, type Association } from 'sequelize'
import db from '.'
import Product from './Product'

class Packs extends Model {
  public id!: number
  public pack_id!: string
  public product_id!: string
  public qty!: number

  public readonly products?: Product[]
  public static associations: {
    products: Association<Packs, Product>
  }
}

Packs.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    pack_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'code'
      }
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'code'
      }
    }
  },
  {
    sequelize: db,
    tableName: 'packs',
    timestamps: false,
    underscored: true
  }
)

Packs.belongsToMany(Product, {
  through: 'Packs',
  foreignKey: 'pack_id',
  otherKey: 'code',
  as: 'products'
})

Product.belongsToMany(Packs, {
  through: 'Packs',
  foreignKey: 'product_id',
  otherKey: 'code',
  as: 'packs'
})

export default Packs
