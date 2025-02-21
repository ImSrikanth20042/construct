import { useState, useEffect, createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  }
  return "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");

    // Prevent frequent writes to localStorage
    const timeout = setTimeout(() => {
      localStorage.setItem("theme", theme);
    }, 200); // Debounce localStorage update

    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
