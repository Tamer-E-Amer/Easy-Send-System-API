/**
 * Application problems model
 */

import mongoose from "mongoose";
const appProblemSChema = mongoose.Schema({
  applicationName: {
    type: String,
    required: [true, "The application must have a name"],
  },
  version: {
    type: String,
    required: [true, "The application must have a version"],
  },
  problem: {
    type: String,
    required: [true, "You musst enter the problem"],
    minlength: [20, "The problem musst have a minimun length of 20 character"],
    maxlength: [150, "The problem must have a length of maximum 150 character"],
  },
  problemDescription: {
    type: String,
    minlength: [
      50,
      "Problem description must have a length of minimum length of 50 character",
    ],
    maxlength: [
      200,
      "Problem description must have a length of maximum length of 200 character ",
    ],
  },
  images: [String],
  office: {
    type: String,
    required: [true, "You musst select the office"],
  },
  isGeneral: {
    type: Boolean,
    default: false,
  },
  computerIP: {
    type: String,
    required: [true, "You should enter the IP of the computer of the problem"],
  },
  user: String,
  status: {
    type: String,
    enum: {
      values: ["pending", "opened", "closed"],
      message: "status should either pending, opened or closed",
    },
    default: "pending",
  },
  notes: {
    type: String,
    maxlength: [200, "Your note should with maximum length 200 character "],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: Date,
});

const AppProblem = mongoose.model("AppProblem", appProblemSChema);

export default AppProblem;
