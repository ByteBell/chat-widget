// App.tsx
import { useState, useEffect } from "react";
import ShadowRootButton from "./ShadowRootButton";
import "./App.css";

function App() {
  const [targetExists, setTargExists] = useState(false);

  useEffect(() => {
    // Check if the target element exists, or create it if needed
    let targetElement = document.getElementById("bytebellai");

    if (!targetElement) {
      // Create the element if it doesn't exist yet
      targetElement = document.createElement("div");
      targetElement.id = "bytebellai";

      // Style the container
      targetElement.style.width = "300px";
      targetElement.style.height = "100px";
      targetElement.style.margin = "20px auto";
      targetElement.style.padding = "20px";
      targetElement.style.border = "1px dashed #ccc";
      targetElement.style.borderRadius = "8px";
      targetElement.style.display = "flex";
      targetElement.style.justifyContent = "center";
      targetElement.style.alignItems = "center";

      document.body.appendChild(targetElement);
    }

    setTargExists(true);

    // Cleanup: remove the element if we created it
    return () => {
      const element = document.getElementById("bytebellai");
      if (element && element.parentElement && !element.hasChildNodes()) {
        element.parentElement.removeChild(element);
      }
    };
  }, []);

  // Custom click handler
  const handleShadowButtonClick = () => {
    console.log("Button in shadow DOM was clicked!");
    alert("Hello from the shadow DOM!");
  };

  return (
    <>
      {/* Only render the ShadowRootButton when the target element exists */}
      {targetExists && (
        <ShadowRootButton
          targetId="bytebellai"
          buttonText="Shadow DOM Button"
          onClick={handleShadowButtonClick}
        />
      )}
    </>
  );
}

export default App;
