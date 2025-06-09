// This took a long time to figure out, and i'm not sure I fully understand it

console.log("Using Fetch to retrieve data from a third-party API");

// the first function is to make a fetch request to the Github API to one of my repositories. I fetch the stargazers_count data, console log it (technically unnessary but helped for testing purposes) and then returned the variable

async function getGit() {
  const response = await fetch(
    "https://api.github.com/repos/rosdykat/week02-assignment"
  );
  console.log("HTTP Response", response);
  const data = await response.json();
  console.log("JSON Data", data);
  const stargazersCount = data.stargazers_count;
  console.log(stargazersCount);
  return stargazersCount;
}

// The next function is to create a DOM element and set it to the value of the stargazers count, this can be done as the count is returned from the previous function

// "starP.textContent is what stumped me for a long time, I forgot about this and wasn't sure how to add the text inside the p"

const starCountContainer = document.getElementById("star-container");
function createStarP(stargazersCount) {
  const starP = document.createElement("p");
  starP.textContent = "StargazersCount: " + stargazersCount;

  // append starP to starcCountContainer

  starCountContainer.appendChild(starP);
}

// the final function combines both functions together. I'm not fully sure how this part worked.
// The keyword async before a function makes the function return a promise:
// await makes a function wait for a Promise

async function getGitAndCreateP() {
  const stargazersCount = await getGit();
  createStarP(stargazersCount);
}

getGitAndCreateP();
