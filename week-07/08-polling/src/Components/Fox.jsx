// TODO: Poll our database or API to update the data in our client at regular intervals
// - To fetch the data from the database / API --> useEffect()
// - Store the data from the database / API --> state / useState()
// - Set up an interval to call the API regularly --> setInterval()

import { useState, useEffect } from "react";

export default function App() {
  // declare state
  const [imgData, setImgData] = useState(null);

  //manage effect
  useEffect(() => {
    async function getFoxes() {
      const response = await fetch("https://randomfox.ca/floof/");
      const data = await response.json();
      const wrangledData = data.image;
      console.log(wrangledData); // Great step for debugging
      setImgData(wrangledData);
    }
    getFoxes(); // This call is for the first time we render the data onto the page

    // we are going to add an interval here to poll the API --> intervals are effects
    const foxesInterval = setInterval(getFoxes, 5000);

    // we are going to clear the interval before the next one happens - this avoids "double" calling the API and keep our intervals tidy
    return () => clearInterval(foxesInterval);
  }, []);

  return (
    <>
      <img src={imgData} alt={"rando fox"} />
    </>
  );
}
