import React from "react";
import InfiniteMovieList from "./InfiniteMovieList";

const MovieList = ({ searchTerm }) => {
  return (
    <div>
      <InfiniteMovieList searchTerm={searchTerm} />
    </div>
  );
};

export default MovieList;
