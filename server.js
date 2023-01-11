import 'express-async-errors'
import express from 'express'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
import morgan from 'morgan';

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json())

app.get('/api/v1', (req, res) => {
  res.send('Hey')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs',authenticateUser, jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch(error) {
    console.log(error)
  }
}

start()