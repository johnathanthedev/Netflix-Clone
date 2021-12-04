import axios from 'axios';
import { Dispatch } from 'redux';
import { tmdb_api, tmdb_api_key } from '../../../config/constants/main'
import { IPopMovieRes, GetPopularMoviesAndShowsAction, IMovie } from '../../../interfaces/tmdb'
import { ActionTypes } from '../../types/index'

export const getPopularMoviesAndShows = () => {
  return async (dispatch: Dispatch) => {
    const popular_movies_url = `${tmdb_api}/movie/popular?api_key=${tmdb_api_key}&page=1` // make service for page no.
    const popular_movies_response = await axios.get<IPopMovieRes>(popular_movies_url)
    const rez = popular_movies_response.data.results
    const movies:IMovie[] = []

    if (rez instanceof Array) {
      rez.map(movie => {
        movies.push(movie)
      })
    }
    
    dispatch<GetPopularMoviesAndShowsAction>({
      type: ActionTypes.GET_POPULAR_MOVIES_AND_SHOWS,
      payload: movies
    })
  }
}