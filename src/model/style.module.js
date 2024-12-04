const mongoose = require("mongoose");

const styleSchema = new mongoose.Schema(
  {
    style: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Style", styleSchema);
