import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Preload key assets
import esprintLogoUrl from "@/assets/esprint-logo-white.svg";
import esprintLogoDateUrl from "@/assets/esprint-logo-date-white.svg";
import keyVisualUrl from "@/assets/key-visual.png";

[esprintLogoUrl, esprintLogoDateUrl, keyVisualUrl].forEach((src) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
});

createRoot(document.getElementById("root")!).render(<App />);
