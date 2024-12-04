const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let user = jwt.verify(token, "SECRET_KEY");

    req.user = user;

    next();
  } catch (error) {
    res.status(400).json({ message: "No token avilable or token expired" });
  }
};

module.exports = verifyToken;
