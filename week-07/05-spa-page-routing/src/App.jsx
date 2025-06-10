import Header from "./Components/Header";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import { Routes, Route } from "react-router";
import UserProfile from "./Components/UserProfile";

// Routes will be the parent of all our Route components

export default function App() {
  return (
    <>
      <h1>My App</h1>
      {/* <Link to="/">Homepage</Link> */}
      <Header />
      {/* Anything outside of the Routes will appear on every page, as it is not conditionally rendered! You'd keep things like the header outside (typically) */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/about"}
          element={
            <>
              <About /> <Contact />
            </>
          }
        />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"profile/:username"} element={<UserProfile />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </>
  );
}
