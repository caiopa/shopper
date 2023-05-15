import { Router } from 'express'
import ProductsController from '../services/controllers/products'
import ProductsService from '../services/service/products'

const productRouter = Router()

const productsService = new ProductsService()
const productsController = new ProductsController(productsService)

productRouter.get('/', productsController.getAll)
productRouter.get('/:code', productsController.findOne)
productRouter.post('/', productsController.create)
productRouter.put('/:code', productsController.update)

productRouter.patch('/', productsController.updateWithCsv)

export default productRouter
