import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SidebarProvider } from "./Contexts/SidebarContext.jsx";
import { ThemeProvider } from "./Contexts/ThemeContext.jsx";
import { StepProvider } from "./Contexts/StepContext.jsx";
import App from "./App.jsx";
import "flowbite/dist/flowbite.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StepProvider>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </StepProvider>
  </StrictMode>,
);
