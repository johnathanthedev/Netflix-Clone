import { ActionTypes } from '../../types/tmdb'
import { Action as TMDBAction } from '../../types/tmdb'

export const tmdbReducer = (state: any = [], action: TMDBAction) => {
  switch(action.type) {
    case ActionTypes.GET_POPULAR_MOVIES_AND_SHOWS:
      return {
        ...state,
        popularMoviesAndShows: action.payload
      }
    case ActionTypes.SET_CURRENT_POPULAR_MOVIE_OR_SHOW:
      return {
        ...state,
        currentPopular: action.payload 
      }
    case ActionTypes.GET_TOP_RATED_MOVIES_AND_SHOWS:
      return {
        ...state,
        topMoviesAndShows: action.payload 
      }
    case ActionTypes.GET_MOVIE_AND_SHOW_GENRES:
      return {
        ...state,
        movieAndShowGenres: action.payload 
      }
    default:
      return state;
  }
}