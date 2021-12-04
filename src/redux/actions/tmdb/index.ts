import axios from 'axios';
import { Dispatch } from 'redux';
import { tmdb_api, tmdb_api_key } from '../../../config/constants/main'
import { IPopMovieRes, IPopShowRes, GetPopularMoviesAndShowsAction, IMovie, IShow, SetCurrentPopularMovieOrShowAction } from '../../../interfaces/tmdb'
import { ActionTypes } from '../../types/index'
import { randomObjectPropertyPicker } from '../../../lib/general'

export const getPopularMoviesAndShows = () => {
  return async (dispatch: Dispatch) => {
    const popular_movies_url = `${tmdb_api}/movie/popular?api_key=${tmdb_api_key}&page=1` // make service for page no.
    const popular_shows_url = `${tmdb_api}/tv/popular?api_key=${tmdb_api_key}&page=1`
    const popular_movies_response = await axios.get<IPopMovieRes>(popular_movies_url)
    const popular_shows_response = await axios.get<IPopShowRes>(popular_shows_url)
    const movies_res = popular_movies_response.data.results
    const shows_res = popular_shows_response.data.results
    const movies:IMovie[] = []
    const shows:IShow[] = []

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
    
    dispatch<GetPopularMoviesAndShowsAction>({
      type: ActionTypes.GET_POPULAR_MOVIES_AND_SHOWS,
      payload: { movies, shows }
    })

    const moviesAndShows = { movies, shows }
    let popHolder = randomObjectPropertyPicker(moviesAndShows);

    function recursiveFunc() {
      if (popHolder.length) {
        popHolder = randomObjectPropertyPicker(popHolder)
      }
    }
    recursiveFunc()
    
    dispatch<SetCurrentPopularMovieOrShowAction>({
      type: ActionTypes.SET_CURRENT_POPULAR_MOVIE_OR_SHOW,
      payload: popHolder
    })
  }
}