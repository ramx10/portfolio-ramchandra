import { useTheme } from "../themes/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <span
        className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600
                   transition-colors duration-500"
      ></span>
      <span
        className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow 
                   transition-transform duration-500 peer-checked:translate-x-5"
      ></span>
    </label>
  );
}