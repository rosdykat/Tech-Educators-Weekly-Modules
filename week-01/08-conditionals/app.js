// I want to log a message to the console
console.log("Hello World!");

// conditionals
// A conditional is a light switch: if the switch is off, the light is off; however, if the switch is on, the light is on!

// syntax structure
// if --> keyword

// pseudo-code
// if (condition --> switch is on) {
//     action --> light is on
// } else if (condition --> switch is off) {
//     action --> light is off
// }

// I want to store boolean values in variables
let switchOn = true;
let switchOff = false;

if (switchOn) {
  //this value is truthy, this action happens, and the second condition does not run
  console.log("The Light is on");
} else if (switchOff) {
  console.log("The Light is off");
}

// this action will never happen because the condition is falsey. Conditionals check if a value is truthy, and then the action will run.
if (switchOff) {
  console.log("The Light is off");
}

// I want to store apples and pears

let apples = 5;
let pears = 10;

// I want to compare the apples and pears and I want to know which one is greater or lesser than the other

// if (apples is greater than pears){
// action --> console.log ("Apples is greater than pears")
// } else if (apples is less than pears){
// action --> console.log("Apples is less than pears")
// }

if (apples > pears) {
  //falsey
  console.log("Apples is greater than pears");
} else if (apples < pears) {
  //truthy
  console.log("Apples is less than pears");
} else if (apples == pears) {
  console.log("Apples and pears are equal");
} else {
  //else will always run if all other conditions are falsey
  console.log("Check your fruit bowl");
}

// the conditional will stop running when one condition is truthy

// == If both values are equal
// === is strict, and will also check if they are both the same value and type
// rule of thumb: === is best practice
// !== ; != not equal

if (1 > 0) {
  console.log("1 is greater than 0");
}

let age = 26;
const legalDrivingAge = 17;
if (age > legalDrivingAge) {
  console.log("You can drive!");
} else if (age < legalDrivingAge) {
  console.log("You can't drive!");
} else {
  console.log("You can't drive yet!");
}

let isRoadLegal = false; //boolean does not change after checks
//set age and Legal driving age

if (age > legalDrivingAge) {
  isRoadLegal = true;
}

console.log("Am I road Legal?", isRoadLegal);

//Movie rating section

age = "bread";
let movieRating = "PG";

if (age > 7) {
  console.log("You can watch this movie!");
} else if (age === 17) {
  if (movieRating === "PG") {
    console.log("You can watch this movie!!");
  }
} else if (age < 17) {
  console.log("You can't watch this movie child!");
} else {
  console.log("You still can't watch the movie");
}
