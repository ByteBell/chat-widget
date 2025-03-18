import App from "./App";
import { createRoot } from "react-dom/client";
import styleText from "./app.css?inline";

(function () {
  const mountWidget = () => {
    // Find the container element
    const container = document.getElementById("bytebellai");

    // Exit if container is not found
    if (!container) {
      console.error('Widget: Target element with ID "bytebellai" not found.');
      return;
    }

    // Get API key from data attribute
    const apiKey = container.getAttribute("data-api-key");

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "500px"; // Set appropriate height or make it adjustable
    iframe.style.border = "none";
    iframe.title = "ByteBell AI Widget";

    // Append iframe to container
    container.appendChild(iframe);

    // Get iframe document - add null check for contentWindow
    if (!iframe.contentWindow) {
      console.error("Widget: iframe.contentWindow is null");
      return;
    }

    const iframeDocument = iframe.contentWindow.document;

    // Open the document for writing
    iframeDocument.open();

    // Write the basic HTML structure
    iframeDocument.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>${styleText}</style>
        </head>
        <body>
          <div id="bytebell-widget-root"></div>
        </body>
      </html>
    `);

    iframeDocument.close();

    // Wait for iframe to load
    iframe.onload = () => {
      // Check if contentWindow exists
      if (!iframe.contentWindow) {
        console.error("Widget: iframe.contentWindow is null after load");
        return;
      }

      const iframeDoc = iframe.contentWindow.document;

      // Get the root element inside the iframe
      const reactContainer = iframeDoc.getElementById("bytebell-widget-root");

      // Add null check for reactContainer
      if (!reactContainer) {
        console.error(
          'Widget: Target element with ID "bytebell-widget-root" not found in iframe.'
        );
        return;
      }

      // Initialize React and render the App
      const reactRoot = createRoot(reactContainer);
      reactRoot.render(<App apiKey={apiKey} />);
    };
  };

  // Determine when to mount the widget based on document state
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(mountWidget, 1000);
    });
  } else {
    setTimeout(mountWidget, 1000);
  }
})();
