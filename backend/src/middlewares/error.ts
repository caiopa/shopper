import { type ErrorRequestHandler } from 'express'

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json(err.message)
  }

  const errorMessage = err.issues && err.issues.length > 0
    ? err.issues[0].message
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    : console.log(err)
  return res.status(500).json({ message: errorMessage })
}

export default errorMiddleware
