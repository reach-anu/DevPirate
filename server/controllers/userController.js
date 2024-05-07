const teamModel = require("../models/teamModel");
const userModel = require("../models/userModel");

const sendJoinRequestController = async (req, res) => {
  try {
    const { username } = req.params;
    const { teamName, isRequested } = req.body;

    if (!teamName) {
      return res.status(400).send({
        success: false,
        message: "Name of the team is required!",
      });
    }

    if (!username) {
      return res.status(400).send({
        success: false,
        message: "Username is required!",
      });
    }

    if (isRequested) {
      const updatedTeam = await teamModel.findOneAndUpdate(
        { slug: teamName },
        { $push: { requestsReceived: { username } } },
        { new: true }
      );
      if (!updatedTeam) {
        return res.status(400).send({
          success: false,
          message: "Team not found!",
        });
      }

      const updatedUser = await userModel.findOneAndUpdate(
        { username },
        { $push: { requestsSent: { teamName, status: "Sent" } } },
        { new: true }
      );
      if (!updatedUser) {
        await teamModel.findOneAndUpdate(
          { slug: teamName },
          { $pull: { requestsReceived: { username } } }
        );
        return res.status(400).send({
          success: false,
          message: "User not found!",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Request sent successfully!",
      });
    } else {
      const updatedTeam = await teamModel.findOneAndUpdate(
        { slug: teamName },
        { $pull: { requestsReceived: { username } } },
        { new: true }
      );
      if (!updatedTeam) {
        return res.status(200).send({
          success: false,
          message: "Team not found!",
        });
      }

      const updatedUser = await userModel.findOneAndUpdate(
        { username },
        { $pull: { requestsSent: { teamName } } },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(400).send({
          success: false,
          message: "User not found!",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Request withdrawn successfully!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const checkJoinRequestController = async (req, res) => {
  try {
    const { username } = req.params;
    const { teamName } = req.body;

    if (!username) {
      return res.status(400).send({
        success: false,
        message: "Username is required!",
      });
    }

    if (!teamName) {
      return res.status(400).send({
        success: false,
        message: "Team name is required!",
      });
    }

    const user = await userModel.aggregate([
      { $match: { username } },
      { $unwind: "$requestsSent" },
      { $match: { "requestsSent.teamName": teamName } },
      { $count: "requestCount" },
    ]);

    const requestSent = user.length > 0;

    res.status(200).send({
      success: true,
      message: "Request sent to team!",
      requestSent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};
module.exports = { sendJoinRequestController, checkJoinRequestController };
