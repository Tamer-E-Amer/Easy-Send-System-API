import dotenv from "dotenv";
// app
import app from "./app.js";
// connection functions
import { DBConnect, getDBVariables } from "./util/databaseConnection.js";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 4000;

// DB connection
const connectionStatus = process.env.CONNECTION_STATUS;
const dbVariables = getDBVariables(connectionStatus);
console.log("dbVariables:", dbVariables);

DBConnect({ ...dbVariables });

// Port listening
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Running server on Port ${PORT}`);
});
