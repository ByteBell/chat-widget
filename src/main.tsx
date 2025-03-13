// const initShadowButtonWidget = () => {
//   // Function to safely initialize when DOM is ready
//   const initialize = () => {
//     // Find target element - don't create it if it doesn't exist
//     const targetElement = document.getElementById("bytebellai");

import Button from "./components/Button";

//     if (!targetElement) {
//       console.error('Target element with ID "bytebellai" not found.');
//       return;
//     }

//     const apiKey = targetElement.getAttribute("data-api-key");

//     const shadowRoot = targetElement.attachShadow({ mode: "open" });

//     shadowRoot.appendChild(document.getElementById);
//   };

//   // Check if document is already loaded
//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", () => {
//       // Add a 1-second delay before initializing
//       setTimeout(initialize, 1000);
//     });
//   } else {
//     // Document already loaded, still delay by 1 second
//     setTimeout(initialize, 1000);
//   }
// };

// // Initialize the widget
// initShadowButtonWidget();

// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";

const targetElement = document.getElementById("bytebellai");

// Create a shadow root
const shadowRoot = targetElement?.attachShadow({ mode: "open" });

// Create a container for your React app inside the shadow DOM
const reactContainer = document.createElement("div");
shadowRoot?.appendChild(reactContainer);

const root = createRoot(reactContainer);
root.render(<Button />);
