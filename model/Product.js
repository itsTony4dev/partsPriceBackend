const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["CPU", "GPU", "RAM", "Storage", "Motherboard", "PSU", "Case"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;