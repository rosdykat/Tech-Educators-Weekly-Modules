import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// We are going to provide our app with the react router tools
import { BrowserRouter } from "react-router"; // This is a provider
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
