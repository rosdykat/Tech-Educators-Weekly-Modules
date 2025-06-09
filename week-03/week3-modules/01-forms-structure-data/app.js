// This is a version to log form data how many showed in his code I did not add the data to the website, however I have a strong idea on how to do this use document.createElement!

// const moduleForm = document.getElementById("main-form");
// console.dir(moduleForm);

// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(moduleForm);
//   console.log(formData);
//   const formValues = Object.fromEntries(formData);
//   console.table(formValues);
// }

// moduleForm.addEventListener("submit", handleSubmit);

// This is the version from the module, using jsObjectPlease to log the form data as this can't be normally formData

const moduleForm = document.getElementById("main-form");

moduleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(moduleForm);
  console.log(formData);
  const jsObjectPlease = Object.fromEntries(formData);
  console.log(jsObjectPlease);
  console.table(jsObjectPlease);

});
