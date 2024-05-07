const express = require("express");
const {
  sendJoinRequestController,
  checkJoinRequestController,
} = require("../controllers/userController");

const router = express.Router();

router.post("/send-join-request/:username", sendJoinRequestController);
router.post("/check-join-request/:username", checkJoinRequestController);

module.exports = router;
