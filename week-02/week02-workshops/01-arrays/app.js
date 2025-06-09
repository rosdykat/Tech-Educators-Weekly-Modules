// arrays
// an array is a way to store data
// declare an array

let favouriteAnimals = ["cat", "capybara", "pigeon"];
// each piece of data inside my array is an item
let favouriteThings = [
  "food", // 0
  5, // 1
  true, // 2
  "bread yay", // 3
];

// I want to log my array in the console
console.log(favouriteAnimals);
console.log(favouriteThings);

// our arrays have two properties --> index, length
// length -- > total number of items in my array
console.log(favouriteAnimals.length); // output: 3
console.log(favouriteThings.length); //output: 4

// index --> each item has an index number which represents the order in which the items are organised
// index numbers are unique: each item has a different index number
// the first item in an array in index zero (0)
// to log a specific variable:
console.log(favouriteAnimals[1]);
// the last index in an array is represented by -1
console.log(favouriteAnimals[favouriteAnimals.length - 1]);

//array methods --> an action i can perform in an array
//actions we can perform in our arrays
//we have plenty of array methods: methods to add and remove items from the array

// add an item at the beginning of the array
// add an item at the end of the array
// remove an item at the beginning of the array
// remove an item at the end of the array

// push -> adds item to the end
// pop -> pop removes the last item in the array
// unshift -> adds item at beginning of an array
// shift -> removes an item from the beginning

console.log(favouriteAnimals.push("kitty")); //change output from 3 to 4
console.log(favouriteAnimals); //kitty added to the end of the array
// console.log(favouriteAnimals.pop("chicken"));

// other methods to manipulate items: spice, slice
