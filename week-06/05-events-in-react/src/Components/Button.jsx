// TODO: I want to have a button: when the user clicks the button, a message appears on the console

// Events:
// event handler --> We add this to the onClick listener (the {})
// event listener --> in react are similar to event listeners in JS, however, they use the keyword on...
// Example: (onClick)

import "./Button.css";
export default function Button() {
  // logic
  function handleClick() {
    console.log("Hello! You clicked me");
  }
  return (
    <>
      {/* This is an anonymous function, it only triggers on click (the () => {handler}) */}
      {/* In simple words, this makes it so the function is done onClick, not on the exact line of code */}
      <button
        className="button"
        onClick={() => {
          handleClick();
        }}
      >
        Click for a message!
      </button>
    </>
  );
}
