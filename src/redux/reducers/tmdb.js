import {
  GET_POPULAR_MOVIES_AND_SHOWS,
  GET_TOP_RATED_MOVIES_AND_SHOWS,
  GET_MOVIE_AND_SHOW_GENRES,
  SET_CURRENT_POPULAR_MOVIE_OR_SHOW,
} from "../../config/constants/tmdb";
import { SET_LOADING_STATUS } from "../../config/constants/general";

const initialState = {
  topRatedMoviesAndShows: {
    movies: [],
    shows: [],
  },
  popularMoviesAndShows: {
    movies: [],
    shows: [],
  },
  currentPopularMovieOrShow: {},
  moviesAndShowsGenres: {
    movies: [],
    shows: [],
  },
  isLoading: false,
};

const tmdbReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POPULAR_MOVIES_AND_SHOWS:
      return {
        ...state,
        popularMoviesAndShows: {
          movies: payload.movies,
          shows: payload.shows,
        },
      };
    case GET_TOP_RATED_MOVIES_AND_SHOWS:
      return {
        ...state,
        topRatedMoviesAndShows: {
          movies: payload.movies,
          shows: payload.shows,
        },
      };
    case SET_CURRENT_POPULAR_MOVIE_OR_SHOW:
      return {
        ...state,
        currentPopularMovieOrShow: payload,
      };
    case GET_MOVIE_AND_SHOW_GENRES:
      return {
        ...state,
        moviesAndShowsGenres: {
          movies: payload.movies,
          shows: payload.shows,
        },
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};

export default tmdbReducer;
