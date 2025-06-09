// Import the express package from our nodule modules folder (also add "type":"module" to package.json)

import express from "express"; //ES6 Syntax

// initialise express
const app = express();

// tell express to use JSON as our data structure
app.use(express.json());

// set up a port to host our server
app.listen(8080, function () {
  console.log("Server running in port 8080");
});

// create the root route (main location of my server) --> http://localhost:8080/
// I want to read data in this root route
app.get("/", function (request, response) {
  response.json({ message: "Welcome to my sever API!!!" });
});

// I want to READ a user's data in this location - To read data, use the get method
app.get("/usersdata", function (request, response) {
  response.json({
    staff: {
      staffName: "rosdy",
      staffLocation: "Norwich",
    },
  });
});

// http://localhost:8080/usersdata

// This is a server api - an interface the client can use to read data
// We have created some routes (/ and usersdata)

// How to create a route that creates new data: example: http://localhost:8000/newData
// The user will send the new data to create as part of the request
// The response will be a confirmation that the new data was recieved
app.post("/newData", function (request, response) {
  app.use(express.json()); // This can just be at the beginning of your JS i think?
  // body --> contains the new data coming from the client
  const data = request.body;
  // store this data in the database
  //   response.json({ message: "body recieved" }, data);
  // response.send to send a replica of the data recieved
  response.send(data); // I cant seem to run multiple reponse. commands at once, not sure how to do multiple?
});
// our browser cannot post data - only GET
// If we want to test this route and see how it works, we will use a testing tool - Postman
// Postman is a testing tool to test RESTful APIs --> APIs build using HTTP methods (get, post)
