const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://dilavr.com.ua/image/catalog/empty-img.png",
  },
  quantity: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "unavailable"],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
    required: true,
  },
  people: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person",
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
