console.log("hii");

// TODO: I want to collect the data from the form
// STEP 1: I ned to select the form from the DOM --> getElementById() or querySelector()

const mainForm = document.getElementById("main-form");
console.dir(mainForm);

//STEP 2: set up an event, so when athe user submits the form, I get the data
// Two parts in an event:
// event handler: when I get the data
function handleSubmit(event) {
  // I want to prevent the default behaviour of submit event: appends the data as a query string in my url
  event.preventDefault();
  //   I am going to create a template object to store the form data
  const formData = new FormData(mainForm);
  console.log(formData);
  // Then, I will add the data input values into the template object
  const formValues = Object.fromEntries(formData);
  console.log(formValues); // Delete this to hide form values
    // ?in the future, you will have a task here to send the data to the server, to be stored in a database
}
// event listener: when user submits form
// the event listener targets the form, so we can apply the event to the button and the inputs

mainForm.addEventListener("submit", handleSubmit);
