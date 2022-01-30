import axios from "axios";
import {
  GET_POPULAR_MOVIES,
  GET_POPULAR_SHOWS,
  GET_TOP_RATED_MOVIES_AND_SHOWS,
  GET_MOVIE_AND_SHOW_GENRES,
  SET_CURRENT_POPULAR_MOVIE_OR_SHOW,
} from "../../config/constants/tmdb";
import { getVideos } from "../../lib/netflix/general";

export const getPopularMoviesAndShows = () => (dispatch) => {
  const popular_movies_url = `${process.env.REACT_APP_TMDB_API_V3}/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`; // make service for page no.
  const popular_shows_url = `${process.env.REACT_APP_TMDB_API_V3}/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;

  const popular_movies_res = Promise.resolve(
    fetch(`${popular_movies_url}`)
      .then((response) => response.json())
      .then((data) => data.results)
  );

  const popular_movies_promise = popular_movies_res.then((tmdb_movies) => {
    tmdb_movies.forEach((tmdb_movie) => {
      tmdb_movie.movie_or_show = "movie";
      tmdb_movie.videos = [];
      const movie_videos = Promise.resolve(getVideos(tmdb_movie));
      movie_videos.then((movie_video_arr) => {
        movie_video_arr &&
          movie_video_arr.forEach((movie_video) => {
            tmdb_movie.videos.push(movie_video);
          });
      });
    });
    return tmdb_movies;
  });

  const popular_movies_resolved = Promise.resolve(popular_movies_promise);
  popular_movies_resolved.then((data) => {
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data,
    });
  });

  const popular_shows_res = Promise.resolve(
    fetch(`${popular_shows_url}`)
      .then((response) => response.json())
      .then((data) => data.results)
  );

  const popular_shows_promise = popular_shows_res.then((tmdb_shows) => {
    tmdb_shows.forEach((tmdb_show) => {
      tmdb_show.movie_or_show = "show";
      tmdb_show.videos = [];
      const show_videos = Promise.resolve(getVideos(tmdb_show));
      show_videos.then((show_video_arr) => {
        show_video_arr &&
          show_video_arr.forEach((show_video) => {
            tmdb_show.videos.push(show_video);
          });
      });
    });
    return tmdb_shows;
  });

  const popular_shows_resolved = Promise.resolve(popular_shows_promise);
  popular_shows_resolved.then((data) => {
    dispatch({
      type: GET_POPULAR_SHOWS,
      payload: data,
    });
  });
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

export const setCurrentPopularMovieOrShow = (item) => (dispatch) => {
  return dispatch({
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
