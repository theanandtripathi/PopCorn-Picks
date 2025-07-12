import React from "react";

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      className="fixed top-4 right-4 px-4 py-2 rounded bg-gray-700 text-white shadow z-50"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;