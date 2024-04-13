const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");
const { requireSignIn } = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/register", registerController);
router.post("/login", loginController);

router.get("/auth-user", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;
