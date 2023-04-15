import express from "express";
// controllers
import {
  getAllAppProblems,
  getAnAppProblem,
  deleteAnAppProblem,
  createNewAppProblem,
  updateAnAppProblem,
} from "../controllers/appProblems.controller.js";
const router = express.Router();

router.route("/").get(getAllAppProblems).post(createNewAppProblem);
router
  .route("/:id")
  .get(getAnAppProblem)
  .delete(deleteAnAppProblem)
  .patch(updateAnAppProblem);
export default router;
