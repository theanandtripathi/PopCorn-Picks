import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const MovieSearch = ({ setSearchTerm }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(query === "" ? "batman" : query); // using batman as default picture <3
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query, setSearchTerm]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center bg-slate-700 border rounded-xl pr-2 max-w-[380px] w-[100%] mr-[10%] border-white">
      <input
        type="text"
        placeholder="Search movies..."
        className="py-[10px] pl-4 pr-3 rounded-md w-full bg-transparent text-white focus:outline-none"
        value={query}
        onChange={handleInputChange}
      />
      <button className="ml-2 p-2 rounded">
        <FaSearch />
      </button>
    </div>
  );
};

export default MovieSearch;
