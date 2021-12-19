import axios from "axios";
import {
  GET_POPULAR_MOVIES_AND_SHOWS,
  GET_TOP_RATED_MOVIES_AND_SHOWS,
  GET_MOVIE_AND_SHOW_GENRES,
  SET_CURRENT_POPULAR_MOVIE_OR_SHOW,
} from "../../config/constants/tmdb";
import { SET_LOADING_STATUS } from "../../config/constants/general";
import GeneralObjectHelper from "../../helpers/generalObjectHelper";
import GeneralArrayHelper from "../../helpers/generalArrayHelper";
import { getVideos } from "../../lib/netflix/general";

export const getPopularMoviesAndShows = () => (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });

    const popular_movies_url = `${process.env.REACT_APP_TMDB_API_V3}/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`; // make service for page no.
    const popular_shows_url = `${process.env.REACT_APP_TMDB_API_V3}/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;
    const popularMovies = [];
    const popularShows = [];

    fetch(`${popular_movies_url}`)
      .then((response) => response.json())
      .then((data) => {
        data.results.map((movie) => {
          movie.movie_or_show = "movie";
          movie.videos = getVideos(movie);
          popularMovies.push(movie);
        });
      });

    fetch(`${popular_shows_url}`)
      .then((response) => response.json())
      .then((data) => {
        data.results.map((show) => {
          show.movie_or_show = "show";
          show.videos = getVideos(show);
          popularShows.push(show);
        });
      });

    dispatch({
      type: GET_POPULAR_MOVIES_AND_SHOWS,
      payload: {
        movies: popularMovies,
        shows: popularShows,
      },
    });
    dispatch({
      type: SET_LOADING_STATUS,
      payload: false,
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
