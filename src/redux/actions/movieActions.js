import axios from 'axios';

export const fetchMoviesRequest = () => ({ type: 'FETCH_MOVIES_REQUEST' });
export const fetchMoviesSuccess = (movies) => ({ type: 'FETCH_MOVIES_SUCCESS', payload: movies });
export const fetchMoviesFailure = (error) => ({ type: 'FETCH_MOVIES_FAILURE', payload: error });
export const selectMovie = (movie) => ({ type: 'SELECT_MOVIE', payload: movie });

const apikey = process.env.REACT_APP_OMDB_API_KEY
export const fetchMovies = (query) => (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${query}`)
      .then(response => {
        const movies = response.data.Search;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };

  
  
export const singleMovieDetail = (id) => (dispatch) => {

    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
      .then(response => {
        dispatch(selectMovie(response.data));
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };



