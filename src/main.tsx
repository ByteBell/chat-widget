// Create a self-initializing widget that only injects the shadow DOM button
const initShadowButtonWidget = () => {
  // Function to safely initialize when DOM is ready
  const initialize = () => {
    // Find target element - don't create it if it doesn't exist
    const targetElement = document.getElementById("bytebellai");

    if (!targetElement) {
      console.error('Target element with ID "bytebellai" not found.');
      return;
    }

    const apiKey = targetElement.getAttribute("data-api-key");

    // Check if the element already has a shadow root
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

    // Create button element
    const button = document.createElement("button");
    button.textContent = "Shadow DOM Button";
    button.addEventListener("click", () => {
      console.log("Button in shadow DOM was clicked!");
      alert(apiKey);
    });

    // Add styles
    const style = document.createElement("style");
    style.textContent = `
      button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.3s;
      }
      
      button:hover {
        background-color: #45a049;
      }
      
      button:active {
        background-color: #3e8e41;
      }
    `;

    // Append elements to shadow root
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(button);
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
