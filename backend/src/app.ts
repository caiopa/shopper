// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import express, { Request, Response } from 'express'
import cors from 'cors'
import productRouter from './routes/products'
import errorMiddleware from './middlewares/error'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.json())

app.get('/health', (_req: Request, res: Response) => res.send({ message: 'Servidor online' }))

app.use('/products', productRouter)

app.use(errorMiddleware)

export default app
