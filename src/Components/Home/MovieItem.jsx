import React from 'react';
import "../../css/MovieItem.css";

const MovieItem = ({ movie, onClick }) => {
  const poster = movie?.Poster === "N/A" ? "/fallback-image.jpg" : movie?.Poster;

  return (
    <div
      className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-lg overflow-hidden shadow-md cursor-pointer mt-4"
      onClick={onClick}
    >
      <div className="w-full h-64 bg-black flex items-center justify-center">
        <img
          src={poster}
          alt={movie?.Title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="text-white text-lg font-bold truncate">{movie?.Title}</h3>
        <p className="text-gray-400 text-sm mt-1">{movie?.Year}</p>
      </div>
    </div>
  );
};

export default MovieItem;

