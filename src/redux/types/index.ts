import { 
  GetPopularMoviesAndShowsAction, 
  SetCurrentPopularMovieOrShowAction 
} from '../../interfaces/tmdb'

export enum ActionTypes {
  GET_POPULAR_MOVIES_AND_SHOWS = 'GET_POPULAR_MOVIES_AND_SHOWS',
  SET_CURRENT_POPULAR_MOVIE_OR_SHOW = 'SET_CURRENT_POPULAR_MOVIE_OR_SHOW'
}

export type Action = 
GetPopularMoviesAndShowsAction |
SetCurrentPopularMovieOrShowAction