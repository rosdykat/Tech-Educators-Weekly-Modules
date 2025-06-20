// This is a "/staff/:username" page --> we have nested this route into "/staff"
// It's a dynamic page route!
// In next, we use [] for dynamic routes --> [username]

//to manage the value of our username params, we are going to use a property called params
export default function UsernamePage({ params }) {
  // from Next 14, params are asyncrhronous
  const awaitParams = params;
  const usernameParams = awaitParams.username;
  console.log(usernameParams); // console logging the username param
  // Above is this (below)
  //   params {
  //     username: "value"
  //   }

  return (
    <>
      <h1>This is the username page</h1>
      <h2>{`This is ${usernameParams}'s Page`}</h2>
    </>
  );
}
