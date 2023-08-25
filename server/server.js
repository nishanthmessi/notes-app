import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

// Initializing Express
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Entry/Home route
app.get('/', (req, res) => {
  res.send('Server is up and running fast as flash')
})

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`)
})
