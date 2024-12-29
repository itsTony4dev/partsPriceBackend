const {
  getAllProducts,
  getProductById,
  createProduct,
  getProductByCategory
} = require("../controller/product");
const express = require("express");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.get("/category/:category", getProductByCategory);

module.exports = router;
