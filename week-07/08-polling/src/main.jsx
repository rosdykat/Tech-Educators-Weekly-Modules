import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Fox from "./Components/Fox.jsx";
import Images from "./Components/Images.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Fox />
    <Images />
  </StrictMode>
);
