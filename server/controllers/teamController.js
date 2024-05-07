const teamModel = require("../models/teamModel");
const { default: slugify } = require("slugify");
const userModel = require("../models/userModel");

const createTeamController = async (req, res) => {
  try {
    const {
      createdBy,
      teamName,
      bio,
      location,
      technologies,
      domains,
      projects,
      hackathons,
      members,
    } = req.body;

    if (!teamName) {
      return res.status(400).send({
        success: false,
        message: "Name of the team is required!",
      });
    }

    if (!createdBy) {
      return res.status(400).send({
        success: false,
        message: "Username is required!",
      });
    }

    const existingTeam = await teamModel.findOne({ teamName });

    if (existingTeam) {
      return res.status(400).send({
        success: false,
        message: "Team with this name already exists!",
      });
    }

    const createdByMember = {
      username: createdBy,
      userrole: "Captain",
    };

    const updatedMembers = [createdByMember, ...members];

    const team = await new teamModel({
      createdBy,
      teamName,
      bio,
      location,
      technologies,
      domains,
      projects,
      hackathons,
      members: updatedMembers,
      slug: slugify(teamName),
    }).save();

    res.status(200).send({
      success: true,
      message: "Team created successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const getAllTeamsController = async (req, res) => {
  try {
    const { isLoggedIn, username } = req.body;

    if (isLoggedIn) {
      if (!username) {
        return res.status(400).send({
          success: false,
          message: "Username is required!",
        });
      }
      const user = await userModel.findOne({ username });
      const teamsRequestedByUser = user.requestsSent.map(
        (request) => request.teamName
      );

      const teamsNotRequestedByUser = await teamModel.find(
        {
          slug: { $nin: teamsRequestedByUser },
        },
        "name bio technologies domains slug"
      );
      res.status(200).send({
        success: true,
        teams: teamsNotRequestedByUser,
      });
    } else {
      const teams = await teamModel.find(
        {},
        "name bio technologies domains slug"
      );
      res.status(200).send({
        success: true,
        message: "Team created successfully!",
        teams,
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

const getTeamByNameController = async (req, res) => {
  try {
    const { teamName } = req.params;

    if (!teamName) {
      return res.status(400).send({
        success: false,
        message: "Name of the team is required!",
      });
    }

    const existingTeam = await teamModel.findOne({ slug: teamName });

    if (!existingTeam) {
      return res.status(400).send({
        success: false,
        message: "Team not found!",
      });
    }

    res.status(200).send({
      success: true,
      message: "Team created successfully!",
      team: existingTeam,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const updateReceivedRequestsController = async (req, res) => {};

const sendJoinRequestController = async (req, res) => {
  try {
    const { teamName } = req.params;
    const { username } = req.body;

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

    const updatedTeam = await teamModel.findOneAndUpdate(
      { slug: teamName },
      { $push: { requestsSent: { username, status: "Sent" } } },
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
      { $push: { requestsReceived: { teamName } } },
      { new: true }
    );
    if (!updatedUser) {
      await teamModel.findOneAndUpdate(
        { slug: teamName },
        { $pull: { requestsSent: { username } } },
        { new: true }
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
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = {
  createTeamController,
  getTeamByNameController,
  getAllTeamsController,
  updateReceivedRequestsController,
  sendJoinRequestController,
};
