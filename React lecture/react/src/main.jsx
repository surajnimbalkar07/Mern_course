import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./lecture 62-lifting state up/App";
import App from "./lecture 63-Quiz Mini Project/App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);