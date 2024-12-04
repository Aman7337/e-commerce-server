const express = require("express");

const {
  createRegistorApi,
  Login,
  getUserDetails,
} = require("../controller/registor.controller");
const verifyToken = require("../middleware/verify");

const router = express.Router();

router.post("/create", createRegistorApi);
router.post("/login", Login);
router.get("/get-detail", verifyToken, getUserDetails);

module.exports = router;
