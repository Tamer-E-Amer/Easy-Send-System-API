import express from "express";
// Routes
import appProblemRouter from "./routes/applicationProblems.route.js";
const app = express();
//Middleware
app.use(express.json());
app.use("/api/v1/appProblems", appProblemRouter);
export default app;
