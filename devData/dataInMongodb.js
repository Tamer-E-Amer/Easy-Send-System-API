/**
 * Importing data from json file of dev data to the mongoDB or delete it
 */
// 1- connect to db
// 2- Read json file
// 3- Create data with appProblem model

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
// Model
import AppProblem from "../models/appProblems.model.js";
// db connection functions
import { getDBVariables, DBConnect } from "../util/databaseConnection.js";

dotenv.config({ path: "./../config.env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1- connect to db
const dbVariables = getDBVariables();
console.log(dbVariables);
DBConnect(dbVariables);

// 2- read json file

const appProblems = JSON.parse(
  fs.readFileSync(`${__dirname}/data/ApplicationsProblems.json`, "utf-8")
);
console.log(appProblems);
// import data
// 3- create data with appProblem model
const importData = async () => {
  try {
    await AppProblem.create(appProblems);
    console.log("App problems has been imported");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteAppProblems = async () => {
  try {
    await AppProblem.deleteMany();
    console.log("Application problems have been deteled");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteAppProblems();
}
