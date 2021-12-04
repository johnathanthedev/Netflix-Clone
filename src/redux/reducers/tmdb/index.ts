import { IMovie, GetPopularMoviesAndShowsAction } from '../../../interfaces/tmdb/index';
import { ActionTypes } from '../../types/index'

export const tmdbReducer = (state: IMovie[] = [], action: GetPopularMoviesAndShowsAction) => {
  switch(action.type) {
    case ActionTypes.GET_POPULAR_MOVIES_AND_SHOWS:
      return action.payload;
    default:
      return state;
  }
}