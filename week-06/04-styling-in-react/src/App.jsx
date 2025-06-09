import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <>
      <h1 className="flex justify-center">This is the app!</h1>
      <Header />
      <NavBar />
      <Footer />
    </>
  );
}
