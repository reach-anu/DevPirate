const jwt = require("jsonwebtoken");

const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Auth failed!",
    });
  }
};
module.exports = { requireSignIn };
