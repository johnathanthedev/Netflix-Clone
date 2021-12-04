import { ActionTypes } from '../../types/index'
import { Action as TMDBAction } from '../../types'

export const tmdbReducer = (state: any = [], action: TMDBAction) => {
  switch(action.type) {
    case ActionTypes.GET_POPULAR_MOVIES_AND_SHOWS:
      return action.payload
    case ActionTypes.SET_CURRENT_POPULAR_MOVIE_OR_SHOW:
      return {
        ...state,
        currentPopular: action.payload 
      };
    default:
      return state;
  }
}