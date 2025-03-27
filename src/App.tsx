// App.js
import { useFrame } from "react-frame-component";
import Layout from "./components/layout";
import { useEffect } from "react";
import styleText from "./app.css?inline";

function App() {
  const { document } = useFrame();

  useEffect(() => {
    if (document) {
      const styleElement = document.createElement("style");
      styleElement.textContent = styleText;
      document.head.appendChild(styleElement);
    }
  }, [document]);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
