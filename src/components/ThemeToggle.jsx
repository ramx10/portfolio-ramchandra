import React from "react";
import { useTheme } from "../themes/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        Ramchandra
      </h1>
      <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
        {[
          "home",
          "about",
          "education",
          "skills",
          "experience",
          "projects",
          "certifications",
          "contact",
        ].map((item) => (
          <li
            key={item}
            onClick={() => scrollToSection(item)}
            className="cursor-pointer hover:text-blue-500 transition-colors"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
