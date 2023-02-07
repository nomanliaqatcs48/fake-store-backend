const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    rate: Decimal128,
    count: Number,
  },
});

module.exports = mongoose.model("product", productSchema);
