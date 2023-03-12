const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model("transaction", transactionSchema)