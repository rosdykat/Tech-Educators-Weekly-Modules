console.log("Module 4 Local Storage");

// Submit data using a form, and store it using local storage

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");
  const fontSize = formData.get("fontSize");

  localStorage.setItem("colour", colour, "fontSize", fontSize);
});

// Below collects the local storage data and prefills the box with was was saved

const colour = localStorage.getItem("colour");
if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");
  const fontSize = formData.get("fontSize");
  //   const colour = formData.get("colour"); (already applied outside function)
  // preferences is now an object, it might contain other preferences...
  const preferences = {
    colour,
    fontSize,
  };

  // when we save it, we stringity it:
  localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);

// up to: ⛳️ In the script.js file, add the following code to retrieve the object from Local Storage:

// next, parse the string back into an object when we retrieve it

const preferences = JSON.parse(localStorage.getItem("preferences"));
if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
  input.value = preferences.fontSize;
}

function loadPreferences() {
  // load the prefs
  const preferences = JSON.parse(localStorage.getItem("preferences"));
  // if for if we have any preferences
  if (preferences) {
    // set the form value
    const input = document.querySelector("input[name='colour']");
    const fontSizeInput = document.querySelector("input[name='fontSize']");
    input.value = preferences.colour || "#00000"; // is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved

    // set the body colour to the user colour preference
    const body = document.querySelector("body");
    body.style.color = preferences.colour || "#000000";

    fontSizeInput.value = preferences.fontSize || "12px";
    body.style.fontSize = preferences.fontSize || "12px";
  }
}

// to load the final function - make sure you are using element.addEventListener so the function is applied upon submitting. If this was just a regular function call it would only work once refreshing the page.
form.addEventListener("submit", loadPreferences);

// This currently works, but what is saved in local storage seems broken. Refreshing the page the colour is saved as the font size in the text box. Think i just need to take a look and fix this.
