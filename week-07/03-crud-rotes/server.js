// imports

import express from "express";
import cors from "cors";
import { db } from "./utils/dbConnection.js"; //destructure db variable

// configs
const app = express();
app.use(express.json());
app.use(cors());

// port
const PORT = process.env.MY_PORT; //port number stored in .env
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

// root route

app.get("/", (req, res) => {
  res.json({ message: "This is the root route. Welcome!" });
});

// Setting up the app.get, this reads data from my database
app.get("/housewives", async (req, res) => {
  // query db
  try {
    // using SQL to select all columns from my specified database and assigning data variable
    const data = await db.query(`SELECT*FROM housewives`);
    // convert data into json
    res.json(data.rows);
    // additional error handling if this is unsuccessful
  } catch (error) {
    console.log("Error!! Check connection string");
    res.status(500).json({ success: false });
  }
});

app.get("/housewivesNamesFranchise", async (req, res) => {
  // a specified get route that only reads the name and franchise, done through entering a different db query
  try {
    const data = await db.query(
      `SELECT housewife_name, franchise FROM housewives`
    );
    res.json(data.rows);
  } catch (error) {
    console.log("Error!! Check connection string");
    res.status(500).json({ success: false });
  }
});

// ===============================================
// error handling
// try ... catch
// try --> the code you want to run
// catch --> the error it gives when the code breaks
// ===============================================

// I want to CREATE new data in the database

app.post("/addHousewife", (req, res) => {
  const body = req.body; // in the body object, we store the new values to add to the table
  const { housewife_name, src, franchise, first_season, last_season, score } =
    req.body; // rewrite body code to look like this, so its simplified (remove body. in insert db queries)
  try {
    const insert = db.query(
      `INSERT into housewives (housewife_name, src, franchise, first_season, last_season, score) VALUES ($1, $2, $3, $4, $5, $6)`, // number of $1 for columns of data
      [housewife_name, src, franchise, first_season, last_season, score] // as we stored the data in req.body we dont need to add body.src etc
    );
    res.status(200).json({ success: true }); // this is to have a confirmation that the body was sent to the database correctly
  } catch (error) {
    console.log("Error!! Check connection string");
    res.status(500).json({ success: false });
  }
});

// TODO: I want to delete data from the table

// dynamic param here v
app.delete("/fireHousewife/:id", (req, res) => {
  // we will use params to set what id we want to target for deletion
  // in the end point, we can set up dynamic params using : (for example :id)
  const housewifeId = req.params.id;
  try {
    const fireHousewife = db.query(`DELETE FROM housewives WHERE id = $1`, [
      housewifeId,
    ]); //add dynamic value in sql query
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error!! Check connection string");
    res.status(500).json({ success: false });
  }
});

// TODO: I want to update data in the table
// Update is a mix of delete and post --> we will use the body to add the updated data, and the params too target the correct entry

app.put("/updateHousewife/:id", (req, res) => {
  const housewifeBody = req.body; //updated housewife data
  const housewifeId = req.params.id; //target data by ID
  const updateHousewife = db.query(
    `UPDATE housewives SET housewife_name = $1, src = $2, franchise = $3, first_season =$4. last_season = $5, score = $6 WHERE id = $7`,
    [
      housewifeBody.housewife_name,
      housewifeBody.src,
      housewifeBody.franchise,
      housewifeBody.first_season,
      housewifeBody.last_season,
      housewifeBody.score,
      housewifeId,
    ]
  );
  res.status(200).jason({ success: true });
  try {
  } catch (error) {
    console.log("Error!! Check connection string");
    res.status(500).json({ success: false });
  }
});
