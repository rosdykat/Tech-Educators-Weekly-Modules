// TODO: I want to fetch data from an API

// we are going to fetch the data from Random Fox
// the location of our data is: https://randomfox.ca/floof/
// the data structure is : JSON (one object written in json)

// STEP 1: establish a communication channel between our app and the API
// async will make sure that we get a Reponse with our data instead of a Promise
async function fetchFoxes() {
  // we use the fetch() method to set up our connection between our app and an API (for example, external API or our own server)
  const response = await fetch("https://randomfox.ca/floof/");
  //   console.log(response); //Response object with our data
  // parse (translate) the response into JSON
  const data = await response.json();
  console.log(data);
  // wrangle the data --> filter the data to the data we actually need
  const wrangledImage = data.image;
  console.log(wrangledImage);
}

fetchFoxes();
