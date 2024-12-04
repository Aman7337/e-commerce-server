const express = require("express");
const {
  createBrands,
  getBrands,
  deleteBrands,
  updateBrands,
} = require("../controller/brands.controller");

const router = express.Router();

router.post("/create", createBrands);
router.get("/", getBrands);
router.delete("/delete/:id", deleteBrands);
router.put("/update/:id", updateBrands);
module.exports = router;
