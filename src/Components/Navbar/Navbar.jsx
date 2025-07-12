import React from "react";
import MovieSearch from "../Home/MovieSearch";

const Navbar = ({ setSearchTerm }) => {
  return (
    <div className="flex justify-between items-center py-4 pl-8 pr-32 bg-gray-800 text-white fixed top-0 w-full ">
      <div className="text-2xl font-bold hidden sm:block">PopCorn Picks</div>
      <MovieSearch setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Navbar;
