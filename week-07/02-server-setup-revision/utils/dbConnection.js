// I am going to create a pool for my database
import pg from "pg";

const db = pg.Pool({
  connectionString: process.env.DB_CONNECTION,
});
