import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/actions/movieActions";
import MovieList from "../../Components/Home/MovieList";
import MovieDetailsModal from "../../Components/Home/MovieDetailsModal";
import Navbar from "../../Components/Navbar/Navbar";
import NoMovies from "../../Components/Home/NoMovies";

const Home = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(fetchMovies("popular"));
  }, [dispatch]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-12">
        {error ? (
          <div className="max-w-[400px] w-[100%] h-[300px] m-auto">
            <NoMovies text={error} />
          </div>
        ) : (
          <MovieList />
        )}

        <MovieDetailsModal />
      </div>
    </div>
  );
};

export default Home;
