import { createContext, useContext, useState, useEffect } from "react";

// Create Sidebar Context
const SidebarContext = createContext();

// Sidebar Provider Component
export const SidebarProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Load dropdown state from sessionStorage
  useEffect(() => {
    const storedDropdown = sessionStorage.getItem("openDropdown");
    if (storedDropdown) {
      setOpenDropdown(storedDropdown);
    }
  }, []);

  // Toggle dropdown and save state
  const toggleDropdown = (name) => {
    const newState = openDropdown === name ? null : name;
    setOpenDropdown(newState);
    sessionStorage.setItem("openDropdown", newState || ""); // Save state
  };

  return (
    <SidebarContext.Provider value={{ openDropdown, toggleDropdown }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom Hook to use Sidebar Context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
