console.log("Local storage");

// Local Storage

// TODO: I want to store the staff data into local storage
const cake = {
  cakeName: "chocolate",
  cakePrice: 10,
  cakeTopping: "icing",
};

// Add new data to local storage
// STEP1: stringify our data --> local storage can only be stored as a string
const stringifiedCake = JSON.stringify(cake);
// STEP 2: to add the stringified data into local storage
localStorage.setItem("cake", stringifiedCake);
// This has added a new value to local storage

// Retrieve data from local storage
// STEP1: Get my data back
const cakeData = localStorage.getItem("cake");
// This data will return as a string, we need to revert this
// STEP 2: we need to parse our stringified data into its original structure
const parsedCakeData = JSON.parse(cakeData);
console.table(parsedCakeData);

// Extra Step: I want to clear my local storage data
localStorage.clear();

// Extra Step: To clear just one item in local storage
// localStorage.removeItem("cake");
