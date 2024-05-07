const express = require("express");
const {
  createTeamController,
  getTeamByNameController,
  getAllTeamsController,
  sendJoinRequestController,
} = require("../controllers/teamController");

const router = express.Router();

router.post("/create", createTeamController);
router.post("/get-all", getAllTeamsController);
router.get("/get/:teamName", getTeamByNameController);
router.post("/send-join-request/:teamName", sendJoinRequestController);

module.exports = router;
