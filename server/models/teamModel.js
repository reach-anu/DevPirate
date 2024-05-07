const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    bio: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "Remote",
    },
    profilePicture: {
      type: String,
    },
    technologies: [
      {
        type: String,
      },
    ],
    domains: [
      {
        type: String,
      },
    ],
    projects: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    hackathons: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    members: [
      {
        username: {
          type: String,
          required: true,
        },
        userimg: {
          type: String,
        },
        userrole: {
          type: String,
          default: "Crew Member",
          required: true,
        },
      },
    ],
    requestsReceived: [
      {
        username: {
          type: String,
          required: true,
        },
      },
    ],
    requestsSent: [
      {
        username: {
          type: String,
          required: true,
        },
        status: {
          type: String,
        },
      },
    ],
    isPrivate: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("team", teamSchema);
