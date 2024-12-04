const express = require("express");
const {
  createProduct,
  getProduct,
  updateProducts,
  deleteProduct,
  getSingleProduct,
} = require("../controller/product.controller");

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProduct);
router.put("/update/:id", updateProducts);
router.delete("/delete/:id", deleteProduct);
router.get("/:id", getSingleProduct);

module.exports = router;
