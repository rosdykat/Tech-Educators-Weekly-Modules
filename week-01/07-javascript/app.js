// JS Files are read top top bottom
// I want to log (action) a message (argument) to the console (object)
console.log("Testing");

// data types -> different ways of organising data
// string = a piece of text

// number, integer
9;

// boolean
true;
false;

// I want to log a message into the console -> "Hello World" 9 false
//  + means concatenation -> we can add multiuple values in one message to our console
console.log("Hello World" + 9 + false);

// variables -> data containers

// I want to store "Hello World" in a container
// The first time we use a variable, we declare it with the keyword let
let welcomeMessage = "Hello World";
let myNumber = 9;
let myBoolean = false;
console.log(welcomeMessage + myNumber + myBoolean);
console.log(welcomeMessage + " " + myNumber + " " + myBoolean);

// I want to change the value of myNumber
// For further uses of the same variable, you can just use the variable name
myNumber = 5;
console.log(myNumber); //5

// To know the data type of a value stored in a variable
// Use the typeof operator
console.log(typeof myNumber); //number

// I want to store two values in one variable
let numberBoolean = 7 + true;
// I want to check the data type of the values inside the variable
console.log(typeof numberBoolean); //number

// ====================================================================================
// operators

// typeof -> it tells the data typeof of a value
// + -> to add numbers OR to concatenate values
// = -> this is NOT an operator. This assigns a value to a variable
// == -> equal
// === -> equals
// < -> less than
5 < 7; // true
// > -> more than
5 > 9; // false

console.log("HelloWorld");
let myName = "Ross";
console.log(myName); // output: Ross
let age = 26;
console.log(age); //output: 26
let bestAnimal = "cat";
console.log(bestAnimal); //output:cat
console.log(age + 10); //output: 36
console.log(10 + 5 + 6); //output: 21
console.log("test"); //output:test
console.log("My name is" + " " + myName + " " + "I am" + " " + age); //output: my name is Ross I am 26

myNumber = 10;
let myNumber2 = 7;
console.log(myNumber + myNumber2); //output: 17

myNumber2 = 11;
console.log(myNumber + myNumber2); //output 21

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: Type Error: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependant)
}

console.log(number);
// expected output: 42

const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum); // Expected output: 59

console.log((sum = Number(value1) + value2)); //Expected output: 14

let cats = 8;
let dogs = 10;
let animals = cats + dogs;

console.log(animals); //output 18

console.log(myName); //output Ross
let firstName = "Ross";
let lastName = "Fletcher";
let fullName = `${firstName} ${lastName}`;

console.log(fullName); //output: Ross Fletcher

let firstName1 = "rosdy";
console.log(`${firstName1} is ${firstName1.length} characters long`);

let isTrue = true;
console.log(isTrue); //Output: true
let isFalse = false;
console.log(isFalse); //Output: false

console.log(typeof firstName); //Output: String
console.log("The type of number is " + typeof cats); //Output:The type of number is Number
console.log;
console.log(`The type of isTrue is ${typeof isTrue}`); //Output: The Type of isTrue is boolean

let name2;
console.log(name2); //Output: undefined
let age2 = null;
console.log(age2); //Output: null

let a = 1;
let b = 2;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;
console.log(isAGreaterThanB); //output: False
console.log(isALessThanB); //output: True
console.log(isAEqualToB); //output false

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB); // Output: Is 1 Greater than 2? false
// ask - do you use `${ } when adding text?

console.log(`Is ${a} less than ${b}?`, isALessThanB); //output Is 1 less than 2? true
console.log(`Is ${a} equal to ${b}?`, isAEqualToB); //output Is 1 equal to 2? false

let leastFavouriteProgrammingLanguage = "JavaScript";
let currentCourseDay = 4;

const sentence = `My least favourite programming language is ${leastFavouriteProgrammingLanguage}. We're on day ${currentCourseDay} of the course.`;

console.log(sentence);
