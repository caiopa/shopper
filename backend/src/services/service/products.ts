/* eslint-disable @typescript-eslint/no-throw-literal */
import Product from '../../database/models/Product'

export default class ProductsService {
  public getAll = async (): Promise<Product[]> => {
    const products = await Product.findAll()
    return products
  }

  public findOne = async (code: number): Promise<Product | null> => {
    const products = await Product.findOne({ where: { code } })
    return products
  }

  public create = async (body: Partial<Product>): Promise<Product | null> => {
    const hasProduct = body.code ? await this.findOne(body.code) : null
    if (hasProduct) {
      throw { status: 400, message: 'Product already exists' }
    }
    const newProduct = await Product.create(body)
    return newProduct
  }

  public update = async (body: Partial<Product>, code: string): Promise<number[] | null> => {
    const result = await Product.update(body, {
      where: { code },
      individualHooks: true
    })
    return result
  }

  public updateWithCsv = async (body: Array<{ code: string, new_price: number }>): Promise<number[][] | null> => {
    const results = []
    for (const item of body) {
      const { code, new_price: newPrice } = item
      console.log(item)
      const result = await Product.update({ sales_price: newPrice }, {
        where: { code },
        individualHooks: true
      })
      results.push(result)
    }

    return results
  }
}
