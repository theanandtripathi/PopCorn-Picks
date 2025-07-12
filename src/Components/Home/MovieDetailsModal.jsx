import React from "react";

const MovieDetailModal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full relative text-white">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/fallback-image.jpg"}
          alt={movie.Title}
          className="w-full h-64 object-contain mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
        <p className="mb-2">Year: {movie.Year}</p>
        <p className="mb-2">Type: {movie.Type}</p>
        <p className="mb-2">IMDB ID: {movie.imdbID}</p>
       
        
        {}
      </div>
    </div>
  );
};

export default MovieDetailModal;