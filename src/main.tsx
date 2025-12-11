import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
