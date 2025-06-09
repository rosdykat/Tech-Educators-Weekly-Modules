import "./App.css";
import Bedroom from "./Components/Bedroom";

export default function App() {
  return (
    <main>
      <h1>03 React Properties</h1>
      {/* Here I am nexting my bedroom component */}
      {/* Props are the attributes for our components */}
      {/* numberCats is a prop, the names are up to you, make them semantic */}
      <Bedroom
        numberCats={1}
        src="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
      />
      <Bedroom numberCats={2} />
      <img
        src="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
        alt="sleepy cat"
        width={150}
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchhzN3DHXbSyY833Sp65uUYldYxD17cb5lA&s"
        alt="long cat"
        width={100}
      />
    </main>
  );
}
