import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import MovieList from "./Components/Home/MovieList";
import ThemeToggle from "./Components/Home/ThemeToggle";

function App() {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#1a202c" : "#9da1a6"; 
  }, [theme]);

  return (
    <div>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Navbar setSearchTerm={setSearchTerm} />
      <MovieList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
