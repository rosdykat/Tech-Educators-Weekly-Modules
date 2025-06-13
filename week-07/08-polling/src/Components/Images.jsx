// TODO: Poll our database or API to update the data in our client at regular intervals
// - To fetch the data from the database / API --> useEffect()
// - Store the data from the database / API --> state / useState()
// - Set up an interval to call the API regularly --> setInterval()

import { useState, useEffect } from "react";

export default function App() {
  // declare state
  const [imgData, setImgData] = useState([]);

  //manage effect
  useEffect(() => {
    async function getImages() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      console.log(data); // Check if its an array of data
      setImgData(data); //saving all data in state as it's an array of data, not a single image url like the fox api
    }

    getImages(); // This call is for the first time we render the data onto the page

    // we are going to add an interval here to poll the API --> intervals are effects

    // we are going to clear the interval before the next one happens - this avoids "double" calling the API and keep our intervals tidy
  }, []);

  return (
    <>
      {imgData.map((data) => (
        <img
          key={data.id}
          src={data.url}
          title={data.title}
          alt={data.alt}
          width={100}
          height={100}
        />
      ))}
    </>
  );
}
