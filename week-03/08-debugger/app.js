// debugger is a keyword we can use to stop our code execution in the browser
// we can check specific tasks and values to see if they are running as expected

const myVariable = "hiiii";
// debugger;

function oneHundred() {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
    debugger;
  }
}

oneHundred();

// function countToTen() {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     debugger;
//   }
// }

// function add(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }

// myVariable;
