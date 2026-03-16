import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { gameProvider } from "./gameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <gameProvider>
    <App />
    </gameProvider>
  </StrictMode>
);
