import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import NoMovies from "./NoMovies";
import MovieDetailModal from "./MovieDetailModal";

const apikey = process.env.REACT_APP_OMDB_API_KEY;

const InfiniteMovieList = ({ searchTerm }) => {

  const [year, setYear] = useState("");
  const [minRating, setMinRating] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm) return;
      setLoading(true);
      let url = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}&page=${page}`;
      if (year) url += `&y=${year}`;
      const res = await fetch(url);
      const data = await res.json();
      let newMovies = data.Response === "True" ? data.Search || [] : [];
     
      if (minRating) {
        const filtered = [];
        for (const movie of newMovies) {
          const detailRes = await fetch(
            `https://www.omdbapi.com/?apikey=${apikey}&i=${movie.imdbID}`
          );
          const detailData = await detailRes.json();
          if (
            detailData.imdbRating &&
            parseFloat(detailData.imdbRating) >= parseFloat(minRating)
          ) {
            filtered.push({ ...movie, imdbRating: detailData.imdbRating });
          }
        }
        newMovies = filtered;
      }
      setMovies((prev) => (page === 1 ? newMovies : [...prev, ...newMovies]));
      setLoading(false);
    };
    fetchMovies();
   
  }, [searchTerm, page, year, minRating]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [searchTerm, year, minRating]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const selectedMovie = movies.find((m) => m.imdbID === selectedMovieId);

  return (
    <div className="mt-24">

      <div className="w-full bg-gray-900 py-4 px-4 mb-6 rounded shadow flex flex-col gap-2">
        <h2 className="text-white text-xl font-bold mb-2">Filter Movies</h2>
        <div className="flex gap-4 items-center flex-wrap">
    
          <select
            value={year}
            onChange={e => setYear(e.target.value)}
            className="border px-2 py-1 rounded bg-gray-800 text-white"
          >
            <option value="">All Years</option>
            {Array.from({ length: 50 }, (_, i) => {
              const y = new Date().getFullYear() - i;
              return <option key={y} value={y}>{y}</option>;
            })}
          </select>
         
          <input
            type="number"
            placeholder="IMDB"
            value={minRating}
            onChange={e => setMinRating(e.target.value)}
            className="border px-2 py-1 rounded bg-gray-800 text-white"
            min="0"
            max="10"
            step="1"
          />
          <button
            className="px-4 py-1 bg-gray-700 text-white rounded"
            onClick={() => {
              setFilterApplied(true);
              setTimeout(() => setFilterApplied(false), 1500);
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>

      {filterApplied && (
        <div className="text-green-400 text-center mb-2 font-semibold"> Your filter has been applied </div>
      )}
      {/* Movie Grid */}
      <div className="mt-[10vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-7 px-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
              onClick={() => setSelectedMovieId(movie.imdbID)}
            />
          ))
        ) : (
          <NoMovies text={"No movies found. Try a different search or filter."} />
        )}
      </div>
      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
      {loading && (
        <div className="col-span-full text-center text-white py-4">Loading...</div>
      )}
    </div>
  );
};

export default InfiniteMovieList;