console.log("05 object method workshop");

// a method is a function inside an object --> a method is a property that performs a task

// three properties storing values, and one storing an action (the function) - this is a method

let animal = {
  animalName: "duck",
  animalColour: "green",
  animalSound: "quack quack",
  saySound: function (sound) {
    console.log(sound);
  },
};

animal.saySound("quack quack");

animal.animalName; //duck

// other familiar methods
// console.log()

// let console = {
//     log: function(){

//     }
// }

// document.createElement()
// let document = {
//     createElement: function(){

//     }
// }
