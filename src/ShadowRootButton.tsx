// ShadowRootButton.tsx
import { useEffect, useRef } from "react";

interface ShadowRootButtonProps {
  targetId: string;
  buttonText?: string;
  onClick?: () => void;
}

const ShadowRootButton = ({
  targetId,
  buttonText = "Click Me",
  onClick = () => alert("Button clicked inside shadow DOM!"),
}: ShadowRootButtonProps) => {
  const shadowRootRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    // Find the target element by ID
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.error(`Element with id "${targetId}" not found`);
      return;
    }

    // Check if the element already has a shadow root
    if (targetElement.shadowRoot) {
      console.log("Element already has a shadow root, using existing one");
      shadowRootRef.current = targetElement.shadowRoot;

      // Clear existing content
      while (shadowRootRef.current.firstChild) {
        shadowRootRef.current.firstChild.remove();
      }
    } else {
      // Create a new shadow root
      console.log("Creating new shadow root");
      shadowRootRef.current = targetElement.attachShadow({ mode: "open" });
    }

    // Create button element
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.addEventListener("click", onClick);

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
    shadowRootRef.current.appendChild(style);
    shadowRootRef.current.appendChild(button);

    // Cleanup function
    return () => {
      // Remove event listener
      if (shadowRootRef.current) {
        const shadowButton = shadowRootRef.current.querySelector("button");
        if (shadowButton) {
          shadowButton.removeEventListener("click", onClick);
        }

        // Clear shadow root contents
        while (shadowRootRef.current.firstChild) {
          shadowRootRef.current.firstChild.remove();
        }
      }
    };
  }, [targetId, buttonText, onClick]);

  // This component doesn't render anything in the React tree
  return null;
};

export default ShadowRootButton;
