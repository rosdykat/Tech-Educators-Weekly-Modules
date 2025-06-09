// // Imports

// import express from "express";

// // configs

// const app = express();
// // app.use(express.json());

// // your routes will go here...

// app.get("/api/pokemon", function (req, res) {
//   const allPokemon = [
//     { name: "Pikachu", colour: "yellow" },
//     { name: "Charmander", colour: "orange" },
//     { name: "Squirtle", colour: "blue" },
//   ];

//   res.json(allPokemon);
// });

// // app.get("/", (request, response) => {
// //   response.json({ message: "Welcome to my server. This is the root route!" });
// // });

// app.listen(8080, function () {
//   console.log("Server is listening on port 8080. Ready to accept requests!");
// });

// ========
// import express from "express";

// const app = express();

// // ✅ ROUTE GOES HERE
// app.get("/api/pokemon", function (req, res) {
//   const allPokemon = [
//     { name: "Pikachu", colour: "yellow" },
//     { name: "Charmander", colour: "orange" },
//     { name: "Squirtle", colour: "blue" },
//   ];

//   res.json(allPokemon); // Send the array as JSON
// });

// app.listen(3000, function () {
//   console.log("Server is listening on port 3000. Ready to accept requests!");
// });

// =====

import express from "express";

const app = express();

app.get("/api/pokemon", function (req, res) {
  const queryStringColour = req.query.colour;

  let allPokemon = [
    { name: "Pikachu", colour: "yellow" },
    { name: "Charmander", colour: "orange" },
    { name: "Squirtle", colour: "blue" },
  ];

  // if we have a colour, use filter to include all the pokemon matching our colour query string
  if (queryStringColour) {
    allPokemon = allPokemon.filter(function (pokemon) {
      return pokemon.colour === queryStringColour;
    });
  }

  res.json(allPokemon);
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080. Ready to accept requests!");
});
