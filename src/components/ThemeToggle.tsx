import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
      rounded-1g 
      px-4 py-2 
      bg-slate-200 
      text-slate-900 
      hover:bg-slate-300 
      cursor-pointer
      
      dark:bg-slate-800 
      dark:text-white 
      dark:hover:bg-slate-700
      "
    >
      {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
    </button>
  );
}
