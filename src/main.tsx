import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Frame from "react-frame-component";
import styleText from "./app.css?inline";

(function () {
  const mountWidget = () => {
    const container = document.getElementById("bytebellai");

    if (!container) {
      console.error(
        'Shadow Widget: Target element with ID "bytebellai" not found.'
      );
      return;
    }

    const initialContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${styleText}</style>
        </head>
        <body>
          <div id="mountHere"></div>
        </body>
      </html>
    `;

    createRoot(container).render(
      <Frame
        id="__modal_iframe"
        initialContent={initialContent}
        style={{ width: "100%", height: "100%", border: "none" }}
      >
        <App />
      </Frame>
    );
  };

  // Determine when to mount the widget based on document state
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(mountWidget, 2000);
    });
  } else {
    setTimeout(mountWidget, 2000);
  }
})();
