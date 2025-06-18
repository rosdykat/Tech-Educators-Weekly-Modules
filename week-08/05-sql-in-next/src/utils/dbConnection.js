// We are going to set up our pool and use the connection string.
// The rest of my app can import this db connection

import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.NEXT_DATABASE_URL,
});
