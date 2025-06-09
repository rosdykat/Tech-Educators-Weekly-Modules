// I am going to create a pool for my database
import pg from "pg";
import dotenv from "dotenv"; //importing dotenv to securely use my DB_CONNECTION string
dotenv.config();

// Creating a connection pool to a postegreSQL database, using my connection string stored in my ENV. this is imported to our server to be useable elsewhere in the app ( import { db } from "./utils/dbConnection.js"; //destructure db variable )
export const db = new pg.Pool({
  connectionString: process.env.DB_CONNECTION,
});
