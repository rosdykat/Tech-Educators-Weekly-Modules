console.log("Hiii");

// we can access the blueprint of our website in JS
console.log(document); //a blueprint of our HTML
console.dir(document);

// Actions you can perform in the DOM
// Create a new element
// document > create an element in the document, like how console creates an element in the console !!
const pTag = document.createElement("p");

console.log(document.createElement("p"));
// Change the text value of our element
pTag.textContent = "hiiii";

console.log(pTag);
// once our element has been created and updated with a value, we can append it to the DOM
document.body.appendChild(pTag);
// You would add content to the html through JavaScript in order to create dynamic content

// =================================================================================
//TODO i want to interact with the button. when the user clicks the button a messasge appears
//STEP: 1 select the button
const btnClick = document.getElementById("btnClick");
console.log(btnClick);

//Step 2: We need to make the button interactive -> event
// An event is an action that happens AFTER the user interacts with an element in our website
// An event has two parts:
// an action that will happen --> event handler
// the user interacts with an element --> event listener

//button event handler

function handleClick() {
  console.log("The User clicked the button");
  //   You can delete he console.log once its been tested successfully
  // TODO steps to add a new element with content to the page
  // (option) select the parent container where you want to add the new element
  const mainBody = document.getElementById("main-body");
  // create new element
  const subheading = document.createElement("h2");
  // update text content
  subheading.textContent = "The user clicked the button";
  // append the child element to its parent container
  document.body.appendChild(subheading);
}

// button event listener
// the addEventListener action (method) needs two pieces of information (two arguments) (arguments = data for our function) -> this function has two parameters (eventType, eventHandler)
btnClick.addEventListener("click", handleClick);
