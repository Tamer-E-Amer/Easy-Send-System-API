import express from "express";
// controllers
import { getAllAppProblems } from "../controllers/appProblems.controller.js";
const router = express.Router();

router.route("/").get(getAllAppProblems);
export default router;
