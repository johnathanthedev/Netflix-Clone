import axios from 'axios';
import { Dispatch } from 'redux';
import { tmdb_api, tmdb_api_key } from '../../../config/constants/main'
import { IPopMovieRes, IPopShowRes, GetPopularMoviesAndShowsAction, IMovie, IShow, SetCurrentPopularMovieOrShowAction, GetTopRatedMoviesAndShowsAction, IGenreRes, IGenre, GetMovieAndShowGenresAction } from '../../../interfaces/tmdb'
import { ActionTypes } from '../../types/index'
import { randomObjectPropertyPicker } from '../../../lib/general'

export const getPopularMoviesAndShows = () => {
  return async (dispatch: Dispatch) => {
    const popular_movies_url = `${tmdb_api}/movie/popular?api_key=${tmdb_api_key}&page=1` // make service for page no.
    const popular_shows_url = `${tmdb_api}/tv/popular?api_key=${tmdb_api_key}&page=1`
    const top_movies_url = `${tmdb_api}/movie/top_rated?api_key=${tmdb_api_key}&page=1`
    const top_shows_url = `${tmdb_api}/tv/top_rated?api_key=${tmdb_api_key}&page=1`
    const movie_genres_url = `${tmdb_api}/genre/movie/list?api_key=${tmdb_api_key}&page=1`
    const show_genres_url = `${tmdb_api}/genre/tv/list?api_key=${tmdb_api_key}&page=1`

    const popular_movies_response = await axios.get<IPopMovieRes>(popular_movies_url)
    const popular_shows_response = await axios.get<IPopShowRes>(popular_shows_url)
    const top_rated_movies_response = await axios.get<IPopMovieRes>(top_movies_url)
    const top_rated_shows_response = await axios.get<IPopShowRes>(top_shows_url)
    const movie_genres_response = await axios.get<IGenreRes>(movie_genres_url)
    const show_genres_response = await axios.get<IGenreRes>(show_genres_url)

    const movies_res = popular_movies_response.data.results
    const shows_res = popular_shows_response.data.results
    const top_movies_res = top_rated_movies_response.data.results
    const top_shows_res = top_rated_shows_response.data.results
    const movie_genres_res = movie_genres_response.data.genres
    const show_genres_res = show_genres_response.data.genres
    
    const movies:IMovie[] = []
    const shows:IShow[] = []
    const top_movies:IMovie[] = []
    const top_shows:IShow[] = []
    const movie_genres:IGenre[] = []
    const show_genres:IGenre[] = []

    if (movies_res instanceof Array) {
      movies_res.map(movie => {
        return movies.push(movie)
      })
    }

    if (shows_res instanceof Array) {
      shows_res.map(show => {
        return shows.push(show)
      })
    }

    if (top_movies_res instanceof Array) {
      top_movies_res.map(top_movie => {
        return top_movies.push(top_movie)
      })
    }

    if (top_shows_res instanceof Array) {
      top_shows_res.map(top_show => {
        return top_shows.push(top_show)
      })
    }

    if (movie_genres_res instanceof Array) {
      movie_genres_res.map(genre => {
        return movie_genres.push(genre)
      })
    }

    if (show_genres_res instanceof Array) {
      show_genres_res.map(genre => {
        return show_genres.push(genre)
      })
    }

    const moviesAndShows = { movies, shows }
    
    dispatch<GetPopularMoviesAndShowsAction>({
      type: ActionTypes.GET_POPULAR_MOVIES_AND_SHOWS,
      payload: { "movies": movies, "shows": shows }
    })

    dispatch<GetTopRatedMoviesAndShowsAction>({
      type: ActionTypes.GET_TOP_RATED_MOVIES_AND_SHOWS,
      payload: { "topMovies": top_movies, "topShows": top_shows }
    })

    let popHolder = randomObjectPropertyPicker(moviesAndShows);

    (() => {
      function recursiveFunc() {
        if (!!popHolder.length) {
          popHolder = randomObjectPropertyPicker(popHolder)
        }
      }
      recursiveFunc()
    })()
    
    dispatch<SetCurrentPopularMovieOrShowAction>({
      type: ActionTypes.SET_CURRENT_POPULAR_MOVIE_OR_SHOW,
      payload: popHolder
    })

    dispatch<GetMovieAndShowGenresAction>({
      type: ActionTypes.GET_MOVIE_AND_SHOW_GENRES,
      payload: { "movieGenres": movie_genres, "showGenres": show_genres }
    })
  }
}