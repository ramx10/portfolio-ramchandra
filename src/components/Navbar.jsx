import React, { useState } from "react";
import { useTheme } from "../themes/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm flex justify-between items-center px-6 py-3">
      <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
        Ram<span className="text-gray-900 dark:text-gray-100">chandra</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-sm md:text-base text-gray-700 dark:text-gray-200 font-medium">
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

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 hover:scale-105"
        >
          <span
            className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              theme === "dark" ? "translate-x-6" : "translate-x-0"
            }`}
          ></span>
        </button>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-full bg-gray-800 dark:bg-gray-200"></span>
          <span className="block h-0.5 w-full bg-gray-800 dark:bg-gray-200"></span>
          <span className="block h-0.5 w-full bg-gray-800 dark:bg-gray-200"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-4 py-4 text-gray-700 dark:text-gray-200 font-medium text-sm shadow-md">
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
      )}
    </nav>
  );
};

export default Navbar;
