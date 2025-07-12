import React, { useEffect, useState } from "react";

const apikey = process.env.REACT_APP_OMDB_API_KEY;

const MovieDetailModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${apikey}&i=${movie.imdbID}&plot=short`
      );
      const data = await res.json();
      setDetails(data);
      console.log("Full details:", data); 
    };
    fetchDetails();
  }, [movie.imdbID]);

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
        {/* <p className="mb-2">IMDB ID: {movie.imdbID}</p> */}
        {details ? (
          <>
            <p className="mb-2">Genre: {details.Genre}</p>
            <p className="mb-2">Actors: {details.Actors}</p>
          </>
        ) : (
          <p className="mb-2">Loading details...</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetailModal;