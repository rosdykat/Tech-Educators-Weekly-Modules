// callback functions --> is a function given as an argument to another function or method
// a function with no name is an anonymous function --> you can't call it
// anonymous functions depend on other functions to work (usually) and they are not reusable

// examples
// forEach()
// const myNumbers = [5, 6, 8];

// myNumbers.forEach(function (number) {
//   console.log(number);
// });

// events
// event listener --> it waits for the user to interact, for example, click
// event handler --> action that happens after the user's interaction
// function handleClick() {
// console.log("user clicked the button");
// }

// handleClick is a callback function

// button.addEventListener("Click", handleClick);

// =====================================================
// example of how we can use callback functions to organise a complex task

// TODO I want to give the user the following messages when they navigate to our website: a welcome message, their username, missed messages

function sayWelcome() {
  console.log("Welcome to my Website! Have fun!");
}

function sayUsername(username) {
  console.log(`Your Username is ${username}`);
}
function sayMissedMessages(messageNumber) {
  console.log(`you have ${messageNumber} missed messages`);
}

function enterWebsite(
  sayWelcomeParameter,
  sayUsernameParameter,
  sayMissedMessagesParameter,
  username,
  messageNumber
) {
  sayWelcomeParameter();
  sayUsernameParameter(username);
  sayMissedMessagesParameter(messageNumber);
}

enterWebsite("rosdy", 9, sayWelcome, sayUsername, sayMissedMessages);

// sayWelcomeParameter();
// sayUsernameParameter("rosdy");
// sayMissedMessagesParameneter(5);

// unfinished - i can't ge this to work!
