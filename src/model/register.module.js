const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    First_name: {
      type: String,
      required: true,
    },
    Last_name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Register", registerSchema);
