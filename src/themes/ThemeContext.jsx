import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || (prefersDark ? "dark" : "light"));

  useEffect(() => {
    const root = document.documentElement;

    // Clean up old theme classes
    root.classList.remove("light", "dark");

    // Add the current theme
    root.classList.add(theme);

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
