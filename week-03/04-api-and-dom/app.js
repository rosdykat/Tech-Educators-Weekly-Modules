console.log("hii");

// TODO: I want to fetch some fox images and add them to my document
// STEP 1: Fetch images
// Remember to apply async and await for fetch/json to work
async function getFoxImages() {
  const response = await fetch("https://randomfox.ca/floof/");
  const data = await response.json();
  const wrangledData = data.image;
  return wrangledData;
}
getFoxImages();
// STEP 2: Create DOM elements to contain the images

const foxesContainer = document.getElementById("foxes-container");
function createFoxImages(foxSrc) {
  const foxImg = document.createElement("img");
  foxImg.src = foxSrc;
  foxImg.alt = "a cute image of a fox";

  foxesContainer.appendChild(foxImg);
}

// we want to put together bother functions: one that create the image element, and one that adds the src value
// So we create a function that includes await

async function createFoxImageAndAddSrc() {
  const fetchData = await getFoxImages();
  createFoxImages(fetchData);
}

createFoxImageAndAddSrc();
