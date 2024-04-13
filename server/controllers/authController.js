const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email) {
      res.status(400).send({
        message: "Email is required!",
        success: false,
      });
      return;
    }
    if (!username) {
      res.status(400).send({
        message: "Username is required!",
        success: false,
      });
      return;
    }
    if (!password) {
      res.status(400).send({
        message: "Password is required!",
        success: false,
      });
      return;
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(200).send({
        success: false,
        message: "User with this email already exists!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userModel({
      email: email,
      username: username,
      password: hashedPassword,
    });

    await user.save();
    res.status(200).send({
      success: true,
      message: "User registered successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier) {
      res.status(400).send({
        message: "Email or username is required!",
        success: false,
      });
      return;
    }
    if (!password) {
      res.status(400).send({
        message: "Password is required!",
        success: false,
      });
      return;
    }

    const existingUser = await userModel.findOne({
      $or: [
        {
          email: identifier,
        },
        {
          username: identifier,
        },
      ],
    });
    if (!existingUser) {
      res.status(400).send({
        success: false,
        message: "Invalid username or password!",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      res.status(400).send({
        success: false,
        message: "Invalid username or password!",
      });
      return;
    }
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).send({
      success: true,
      message: "User login successfully.",
      existingUser,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = { registerController, loginController };
