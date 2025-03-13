import Button from "./components/Button";
import { createRoot } from "react-dom/client";

const initShadowButtonWidget = () => {
  // Function to safely initialize when DOM is ready
  const initialize = () => {
    // Find target element - don't create it if it doesn't exist
    const targetElement = document.getElementById("bytebellai");

    if (!targetElement) {
      console.error('Target element with ID "bytebellai" not found.');
      return;
    }

    // const apiKey = targetElement.getAttribute("data-api-key");

    let shadowRoot;
    if (targetElement.shadowRoot) {
      shadowRoot = targetElement.shadowRoot;
      // Clear existing content
      while (shadowRoot.firstChild) {
        shadowRoot.firstChild.remove();
      }
    } else {
      // Create a new shadow root
      shadowRoot = targetElement.attachShadow({ mode: "open" });
    }

    // Create a container for React to render into
    const reactContainer = document.createElement("div");
    shadowRoot.appendChild(reactContainer);

    // Define a wrapper component that can use the apiKey
    const ButtonWrapper = () => {
      return <Button />;
    };

    // Render the React component into the shadow DOM
    const root = createRoot(reactContainer);
    root.render(<ButtonWrapper />);
  };

  // Check if document is already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      // Add a 1-second delay before initializing
      setTimeout(initialize, 1000);
    });
  } else {
    // Document already loaded, still delay by 1 second
    setTimeout(initialize, 1000);
  }
};

// Initialize the widget
initShadowButtonWidget();

// Export the initialization function for external use
export default initShadowButtonWidget;
