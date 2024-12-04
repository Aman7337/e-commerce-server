const express = require("express");
const {
  createReviewApi,
  getReviewApi,
  updateReviewApi,
  deleteReviewApi,
} = require("../controller/review.controller");

const router = express.Router();

router.post("/create", createReviewApi);
router.get("/", getReviewApi);
router.put("/update/:id", updateReviewApi);
router.delete("/delete/:id", deleteReviewApi);

module.exports = router;
