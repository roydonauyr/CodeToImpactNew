const mongoose = require('mongoose')

const marketValuationSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
})

module.exports = mongoose.model('MarketValuation', marketValuationSchema)
