import axios from "axios";
import {
  GET_POPULAR_MOVIES_AND_SHOWS,
  GET_TOP_RATED_MOVIES_AND_SHOWS,
  GET_MOVIE_AND_SHOW_GENRES,
  SET_CURRENT_POPULAR_MOVIE_OR_SHOW,
} from "../../config/constants/tmdb";
import GeneralObjectHelper from "../../helpers/generalObjectHelper";
import GeneralArrayHelper from "../../helpers/generalArrayHelper";

export const getPopularMoviesAndShows = () => async (dispatch) => {
  try {
    const popular_movies_url = `${process.env.REACT_APP_TMDB_API_V3}/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`; // make service for page no.
    const popular_shows_url = `${process.env.REACT_APP_TMDB_API_V3}/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;
    const popularMoviesRes = await axios.get(`${popular_movies_url}`);
    const popularShowsRes = await axios.get(`${popular_shows_url}`);
    const popularMoviesAndShowsObj = {};

    popularMoviesAndShowsObj.movies = popularMoviesRes.data.results;
    popularMoviesAndShowsObj.shows = popularShowsRes.data.results;
    dispatch({
      type: GET_POPULAR_MOVIES_AND_SHOWS,
      payload: popularMoviesAndShowsObj,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTopRatedMoviesAndShows = () => async (dispatch) => {
  try {
    const top_movies_url = `${process.env.REACT_APP_TMDB_API_V3}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;
    const top_shows_url = `${process.env.REACT_APP_TMDB_API_V3}/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;
    const topRatedMoviesRes = await axios.get(`${top_movies_url}`);
    const topRatedShowsRes = await axios.get(`${top_shows_url}`);
    const topRatedMoviesAndShowsObj = {};

    topRatedMoviesAndShowsObj.movies = topRatedMoviesRes.data.results;
    topRatedMoviesAndShowsObj.shows = topRatedShowsRes.data.results;
    dispatch({
      type: GET_TOP_RATED_MOVIES_AND_SHOWS,
      payload: topRatedMoviesAndShowsObj,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentPopularMovieOrShow =
  (moviesAndShowsObj) => (dispatch) => {
    const generalObjectHelper = new GeneralObjectHelper(moviesAndShowsObj);
    const randomProperty = generalObjectHelper.randomPropertySelector();
    const generalArrayHelper = new GeneralArrayHelper(randomProperty);
    const item = generalArrayHelper.randomElementSelector();

    dispatch({
      type: SET_CURRENT_POPULAR_MOVIE_OR_SHOW,
      payload: item,
    });
  };

export const getMoviesAndShowsGenres = () => async (dispatch) => {
  const movie_genres_url = `${process.env.REACT_APP_TMDB_API_V3}/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;
  const show_genres_url = `${process.env.REACT_APP_TMDB_API_V3}/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;
  const movieGenresRes = await axios.get(`${movie_genres_url}`);
  const showGenresRes = await axios.get(`${show_genres_url}`);
  const movieAndShowGenresObj = {};

  movieAndShowGenresObj.movies = movieGenresRes.data.genres;
  movieAndShowGenresObj.shows = showGenresRes.data.genres;
  dispatch({
    type: GET_MOVIE_AND_SHOW_GENRES,
    payload: movieAndShowGenresObj,
  });
};
