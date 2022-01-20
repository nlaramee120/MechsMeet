const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  priceInCents: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  _id: {
    type: Number,
    required: true
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
