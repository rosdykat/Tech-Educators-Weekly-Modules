// I want to test that my JS is connected to my HTML

console.log("hiii");

// functions
// TODO I want to say welcome to a user in my website

// Step 1: I want to store the welcome message and the user's name
// global scope -> these variables exist for the rest of the code
let welcomeMessage = "Hi";
let username = "Rosdy";

// Step 2: I want to log the welcome message and the username in the console. You can use them anywhere else in the code

console.log(welcomeMessage + " " + username); //concatenation with +
console.log(`${welcomeMessage} ${username}`); //string literals

// function structure

// function functionName(){
// the steps to complete the task
// }

// variables do not exist inside a function (scope)
// so therefore, you would do let variable again in these
// block scope -> the variables we decale inside the function only exist inside the function
// this is a function declaration
function sayWelcomeToRoss() {
  let welcomeMessage = "Hello";
  let username = "Ross";
  console.log(`${welcomeMessage} ${username}`);
}

// for a function to work, we need to invoke it or call it
sayWelcomeToRoss();

function sayWelcomeToTeam() {
  let WelcomeMessage = "hii";
  let username = "team";

  console.log(`${WelcomeMessage} ${username}`);
}
sayWelcomeToTeam();

// I need a way to reuse my sayWelcome function for ALL my users
// we can use parameters (in the regular brackets) in our function to be built in with arguments (data goes in the function call) when we know it

function sayWelcome(message, user, userLocation) {
  let welcomeMessage = message;
  let username = user;
  let location = userLocation;

  console.log(`${welcomeMessage} ${username} in ${location}`);
  // return makes a block scope element (script in a function) outside a function
  return location;
}

sayWelcome("hiii", "rossss", "Norwich");
sayWelcome("yooo", "rosssssssss", "Norwich");

// your function can be called anywhere in your script

function sayMessageTo(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

sayMessageTo("hello cute lil", "kitty"); // hello cute lil kitty!

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a + b;
}
function divide(a, b) {
  return a + b;
}
function calculate(a, b) {
  return a + b;
}
function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divice(a, b);
  }
}

const result = calculate(1, 5, "+");
console.log("The result is", result); // Output: The result is 6

const anotherResult = calculate(2, 10, "*");
console.log("Another result is", anotherResult); // Output: Another result is 20
