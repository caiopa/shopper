
import { type NextFunction, type Request, type Response } from 'express'
import type ProductsService from '../service/products'

export default class ProductsController {
  constructor(private readonly service: ProductsService) {

  }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const products = await this.service.getAll()
    res.status(200).json(products)
  }

  public findOne = async (req: Request, res: Response): Promise<void> => {
    const { code } = req.params
    const product = await this.service.findOne(Number(code))
    res.status(200).json(product)
  }

  public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await this.service.create(req.body)
      res.status(201).json({ message: 'Produto criado com sucesso' })
    } catch (error) {
      next(error)
    }
  }

  public update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { code } = req.params
    try {
      await this.service.update(req.body, code)
      res.status(201).json({ messagem: 'produto updated' })
    } catch (error) {
      next(error)
    }
  }

  public updateWithCsv = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await this.service.updateWithCsv(req.body)
      res.status(201).json({ messagem: 'produtos updated' })
    } catch (error) {
      next(error)
    }
  }
}
