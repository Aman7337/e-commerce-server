const express = require("express");
const {
  createCrousal,
  getCarousal,
  deleteCarousal,
  updateCarousal,
} = require("../controller/carousel.controller");

const router = express.Router();

router.post("/create", createCrousal);
router.get("/", getCarousal);
router.delete("/delete/:id", deleteCarousal);
router.put("/update/:id", updateCarousal);


module.exports = router;
