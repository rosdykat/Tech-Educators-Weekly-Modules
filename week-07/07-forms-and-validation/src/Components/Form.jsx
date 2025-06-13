// TODO: set up a form to collect user's data
// - Create the form UI ✅
// - Add an event to submit the form data --> OnSubmit  ✅
// -Store the submitted data --> state ✅
// -We need to track the input changes ✅
import { useState } from "react";

export default function Form() {
  // The long easy way to do this
  // We are going to store the input values in a different state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleUsername(event) {
    setUsername(event.target.value);
    console.log(username);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <h1>Form</h1>
      {/* When we pass the handler to the event, the argument for the event parameter is the actual onSubmit */}
      {/* This should be a function that takes an event object as an argument and calls preventDefalt on it */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Deets</legend>
          {/* The htmlFor attribute is the same as the for attribute, just a clarification from react */}
          <label htmlFor="username">Username:</label>
          {/* each input needs a name! */}
          <input
            type="text"
            className="username"
            required
            placeholder="Username here"
            value={username}
            // The onChange wevent will track the changes in the input value, and the mutation function in the handler will update the value of the state at the same time.
            // In other words, when the data changes, it will pass through the handleUsername function that updates the state
            onChange={handleUsername}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="email"
            required
            placeholder="enter email"
            value={email}
            onChange={handleEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="password"
            required
            value={password}
            onChange={handlePassword}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <p>{username}</p>
    </>
  );
}
