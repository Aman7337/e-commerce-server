const express = require("express");
const mongoose = require("mongoose");
const carousalRoutes = require("./src/routes/carousal.routes");
const brandRoutes = require("./src/routes/brands.routes");
const productRoutes = require("./src/routes/product.routes");
const styleRoutes = require("./src/routes/style.routes");
const reviewRoutes = require("./src/routes/review.routes");
const registorRoutes = require("./src/routes/registor.routes");

const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);
app.use(express());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongo connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
main()
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));

// api routes
app.use("/api/carousal", carousalRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/products", productRoutes);
app.use("/api/styles", styleRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/registor", registorRoutes);

// listening server
app.listen(PORT, () => {
  console.log(`server started at location http://localhost:${PORT}`);
});
