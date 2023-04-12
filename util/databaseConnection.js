import mongoose from "mongoose";
/**
 * @description this function is used to get the database connection variables such as database query string and database host whether it is stored locally or on the cloud and that is according to passed connection status as a parameter
 *
 * @returns {variables} // database variables i.e: db connection string and db host
 */
export const getDBVariables = () => {
  const connStatus = process.env.CONNECTION_STATUS;
  const variables =
    connStatus === "online"
      ? {
          dbConnString: process.env.DATABASE_CLOUD.replace(
            "<PASSWORD>",
            process.env.DB_PASSWORD
          ),
          dbHost: "cloud database",
        }
      : {
          dbConnString: process.env.DATABASE_LOCAL,
          dbHost: "local database",
        };
  return variables;
};

/**
 * @descriptio this function is used to connect to mongodb according to object of dbVariables
 * @param {{...dbVariables}}  //destructed object
 * @returns promise of connection status
 */
export const DBConnect = async ({ dbConnString, dbHost }) => {
  try {
    await mongoose.connect(dbConnString);
    console.log(`successfully connected to ${dbHost}`);
  } catch (error) {
    console.log(error);
  }
};
