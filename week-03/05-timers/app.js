console.log("05-timers module");

// We use timers to count time in JS
// We have two types of timers: a timeout and an interval
// timeout --> countdown and at the end, an action happens (New years countdown --> fireworks) This action happens ONCE.
// interval --> an action happens regularly after a specific amount of time (a clock tick, traffic lights etc) This action NEVER stops unless we stop it.

// ====================================================================================
// timeouts
// a method, requiring two arguments, a function (with action to happen at the end, and a delay)
// setTimeout(function (){}, delay);

// This is a callback function
// setTimeout(function () {
//   console.log("hiiiii");
// }, 3000); // 3 seconds

// you can also seperate the function to be reused or kept tidy
function handleCountdown() {
  console.log("hellooo");
}

setTimeout(handleCountdown, 5000); // 5 seconds

// intervals - This will never end, works very similar to a timeout
setInterval(function () {
  console.log("every 2 seconds i say hiii");
}, 2000); // 2 seconds

// We can use a timeout to stop the action in an interval

// using a clear interval - cant figure this out

// const interval =
//   (setI () {
//     console.log("This happens every 4 seconds");
//   },
//   4000);

// function stopIntervalWithTimeout() {
//   setTimeout(function () {
//     // The clearInterval method stops an interval
//     // the argument of the clearInterval method is the interval we want to stop
//     clearInterval(interval);
//   }, 12000);
// }

// stopIntervalWithTimeout();

//  ======================================================================

// examples of timers we will use in the course
// week 3 assignment --> we will build a cookie clicker game with an interval to give the user a cookie regularly every set of seconds
// week 7 --> polling: using an interval to refresh the data we get from our database
