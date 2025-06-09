// ! Below is recipe API

// // TODO: I want to run data from an external API
// // API: https://dummyjson.com/recipes
// // - Fetch the data from the api
// // - manage the fetch effect --> useEffect()
// // - store the data from the API --> state
// // - manage state --> useState()

// !Importing hooks from react (useState stores and manages data inside component, useEffect runs the code)

import { useEffect, useState } from "react";

// // render the data
// export default function App() {
//   // declate useState
//   const [recipes, SetRecipes] = useState([]);

//   // declare useEffect()
//   useEffect(() => {
//     async function getRecipes() {
//       const response = await fetch("https://dummyjson.com/recipes");
//       const data = await response.json();
//       const wrangledData = data.recipes;
//       console.log(wrangledData);
//       console.log(data);
//       SetRecipes(wrangledData);
//     }
//     getRecipes();
//   }, []); //Remember to add the dependency array (the [])
//   // If the aaray is empty the effects happesns when the component mounts. If the array hs a value inside, the effectr will happen when that value appears
//   // fetch - goes inside the anonymous callback function (above this) making the function (getRecipes) used when the useEffect applies
//   // function getRecipes(){
//   //   const response = fetch("https://dummyjson.com/recipes");
//   //   const data = response.json ();
//   //   return data;
//   // }
//   // getRecipes();
//   return (
//     <>
//       <h1>This is the app.</h1>
//       <div>
//         {recipes.map((recipe) => {
//           return (
//             <>
//               <h2 className="title">{recipe.name}</h2>
//               <p className="cuisine">{recipe.cuisine}</p>
//               <img src={recipe.image} alt={recipe.name} />
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// !=============================================================

export default function App() {
  // Set up state variable called items and setItems to update it
  // In an empty array [] as it will be populated through the API
  const [items, setItems] = useState([]);

  // Fetching api data and saving it in setItems
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://theaxolotlapi.netlify.app/");
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  // Creating the UI, a h1, a list, items id and items title from the API, stored in the setItems
  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
