const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Transaction', transactionSchema)
