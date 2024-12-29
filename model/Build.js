const mongoose = require("mongoose");
const Product = require("./Product");

const BuildSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  build_name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      _id: false,
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        validate: {
          validator: async function (value) {
            const product = await Product.findById(value);
            if (!product) {
              throw new Error(`Product with id ${value} does not exist`);
            }
          },
          message: "Product does not exist",
        },
      },
    },
  ],
});

const Build = mongoose.model("Build", BuildSchema);
module.exports = Build;
