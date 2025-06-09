// loops
// we use loops to repeat a task multiple times
// we will have a loop block where we will add how many times the loop will run and the task itself with as many steps as we need.

// types of loops
// for loop --> a loop where I can specify how many times I run a task
// I want to run a task for a specific amount of times

// for (loop settings --> initialisation, condition, afterthought){
// task
// }

//TODO I want to add a message in the console 5 times
for (let i = 0; i <= 4; i++) {
  // good to start i = 0 as it is the same value as an array
  console.log("Log this message", i);
}

// increment operator ++ -->  adds 1
// another syntax --> i = i + 1
// i <= // i < 4 & i === 4

// TODO I want to log a list of my array items in the console
let colours = ["blue", "orange", "pink", "yellow"];

// console.log(colours[0]);

// the initialisation or initial value matches the index value of my array items
for (let i = 0; i < 4; i++) {
  console.log(colours[i]);
}

// =================================================================================
// while loops
// when we want to run a task for an indefinite amount of times, we can use a while loop

// examples
// answering questions --> in case the user gives you a non-valid answer
// entering a password --> repeat until the user enters the correct password
// logging in --> user needs correct username

// structure
// while (loop settings --> condition){
// task
// }

// username example

const username = "rosdy";

while (username !== "rosdy") {
  alert("wrong username!");
}

// a while loop loks very similar to a conditional. The difference is that a conditional will run only once
