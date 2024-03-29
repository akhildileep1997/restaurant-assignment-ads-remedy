const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  review: {
    type: Array,
    default: [],
  },
  rating: {
    type: Array,
    default: [],
  },
}, {
    timestamps:true
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product