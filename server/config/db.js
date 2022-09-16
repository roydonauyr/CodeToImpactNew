const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const mongodb = await mongoose.connect(process.env.MONGO_URI)

    console.log(`Mongo DB connected: ${mongodb.connection.host}`)
  } catch (err) {
    console.error(err.message)

    process.exit(1)
  }
}

module.exports = connectDB
