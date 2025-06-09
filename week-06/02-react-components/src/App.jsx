// App Component is the parent component
// import CSS into the file, usually all our imports go at top
import "./App.css";
import Bedroom from "./Components/Bedroom";
import Kitchen from "./Components/Kitchen";
import LivingRoom from "./Components/LivingRoom";
import Garage from "./Components/Garage";

export default function App() {
  return (
    <main>
      <h1>02 React Components</h1>
      {/* Here I am nexting my bedroom component */}
      <Bedroom />
      <Bedroom />
      <LivingRoom />
      <Kitchen />
      <Garage />
    </main>
  );
}
