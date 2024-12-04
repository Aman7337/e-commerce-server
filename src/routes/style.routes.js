const express = require("express");
const {
  createStyle,
  getStyle,
  updateStyle,
  deleteStyle,
} = require("../controller/Style.controller");

const router = express.Router();

router.post("/create", createStyle);
router.get("/", getStyle);
router.post("/update/:id", updateStyle);
router.delete("/delete/:id", deleteStyle);

module.exports = router;
