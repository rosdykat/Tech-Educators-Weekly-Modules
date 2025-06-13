// TODO: set up a form to collect user's data
// - Create the form UI ✅
// - Add an event to submit the form data --> OnSubmit  ✅
// -Store the submitted data --> state ✅
// -We need to track the input changes ✅
import { useState } from "react";

export default function Form() {
  // The long easy way to do this
  // We are going to store the input values in a different state variables

  //   To do this with shorter code, set input values all in one state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleFormData(event) {
    // We need to add some logic, so our state "remebers" the previous inputs when trackiing changes in different inputs --> spread syntax
    // Here we are mering objects
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <>
      <h1>Form</h1>
      {/* When we pass the handler to the event, the argument for the event parameter is the actual onSubmit */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Deets</legend>
          {/* The htmlFor attribute is the same as the for attribute, just a clarification from react */}
          <label htmlFor="username">Username:</label>
          {/* each input needs a name! */}
          <input
            type="text"
            name="username"
            required
            placeholder="Username here"
            value={formData.username}
            // The onChange wevent will track the changes in the input value, and the mutation function in the handler will update the value of the state at the same time.
            onChange={handleFormData}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            required
            placeholder="enter email"
            value={formData.email}
            onChange={handleFormData}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleFormData}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <p>hi {formData.username}</p>
      <p>{formData.email}</p>
      <p>{formData.password}</p>
    </>
  );
}
