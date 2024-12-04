const Register = require("../model/register.module");
const bcrypt = require("bcryptjs");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");

const createRegistorApi = async (req, res) => {
  const { First_name, Last_name, Email, userPassword } = req.body;

  if (First_name === "") {
    return res.status(400).json({ message: "Write the First name" });
  } else if (Last_name === "") {
    return res.status(400).json({ message: "fill the Fill the Last name" });
  } else if (Email === "") {
    return res.status(400).json({ message: "Write the email" });
  }

  try {
    await bcrypt.hash(userPassword, 10, async (err, data) => {
      if (err) return console.log(err, "errr");
      let InputFields = await Register.create({
        First_name,
        Last_name,
        Email,
        Password: data,
      });

      let { Password, ...others } = InputFields._doc;

      res.status(201).json({
        message: "User created successfully",
        user: others,
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ messgae: `Internal server error: ${error.message}` });
  }
};

const Login = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    let existingUser = await Register.findOne({ Email: Email });

    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User does not exists, please register" });
    }

    bcrypt.compare(Password, existingUser.Password, (err, data) => {
      if (data) {
        let { Email, _id, ...others } = existingUser._doc;
        let token = jwt.sign({ Email, _id }, "SECRET_KEY", { expiresIn: "1h" });
        return res.status(200).json({ message: "Acess granted", token });
      } else {
        return res
          .status(200)
          .json({ message: "Email or password does not match" });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error : ${error.message}` });
  }
};

const getUserDetails = async (req, res) => {
  const userId = req.user._id;
  try {
    let existingUser = await Register.findById(userId);

    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User does not exists, please register" });
    }

    return res.status(200).json(existingUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error : ${error.message}` });
  }
};

module.exports = {
  createRegistorApi,
  Login,
  getUserDetails,
};
