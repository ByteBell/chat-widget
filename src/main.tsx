import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./components/Button";

// Function to safely initialize when DOM is ready
const initButtonWidget = () => {
  // Find target element
  const targetElement = document.getElementById("bytebellai");

  if (!targetElement) {
    console.error('Target element with ID "bytebellai" not found.');
    return;
  }

  // Create React root and render Button
  try {
    const root = createRoot(targetElement);
    root.render(<Button />);
    console.log("Button component rendered successfully");
  } catch (error) {
    console.error("Failed to render Button component:", error);
  }
};

// Check if document is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    // Add a small delay before initializing
    setTimeout(initButtonWidget, 100);
  });
} else {
  // Document already loaded, still add a small delay
  setTimeout(initButtonWidget, 100);
}
