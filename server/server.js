import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import noteRoutes from './routes/noteRoutes.js'

dotenv.config()
connectDB()

// Initializing Express
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

// Users Route
app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)

// Entry/Home route
app.get('/', (req, res) => {
  res.send('Server is up and running fast as flash')
})

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`)
})
