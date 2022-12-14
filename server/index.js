const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 8000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/instruments', require('./routes/instrumentRoutes'))
app.use('/api/marketValuations', require('./routes/marketValuationRoutes'))
app.use('/api/transactions', require('./routes/transactionRoutes'))
app.use('/api/investments', require('./routes/investmentRoutes'))
app.use('/api/analytics', require('./routes/analyticRoutes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
  })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))
