console.log("Module 03 JavaScript:Timers");

const myButton = document.getElementById("button");

const buttonText = document.getElementById("hiddenButton");
buttonText.style.visibility = "hidden";

myButton.addEventListener("click", function () {
  const buttonText = document.getElementById("hiddenButton");
  //   const bodyButton = document.querySelector("body");
  //   const buttonText = document.createElement("p");
  //   buttonText.textContent = "hii";
  buttonText.style.visibility = "visible";
  //   bodyButton.append(buttonText);
  //   return buttonText;
  setTimeout(function () {
    //   document.getElementById("hiddenButton");

    hiddenButton.style.visibility = "hidden";
  }, 5000);
});

// const stopWatch = document.getElementById("stopWatch");

// stopWatch.addEventListener("click", function () {
//     setInterval(function () {
// console.log("A second has passed")
// }, 1000)
