const connectDB = require('./config/db')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 8000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

app.use('/api/auth', require('./routes/Auth/auth.js'))

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))
