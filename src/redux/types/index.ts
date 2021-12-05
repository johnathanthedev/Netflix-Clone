import { 
  GetPopularMoviesAndShowsAction, 
  GetTopRatedMoviesAndShowsAction,
  SetCurrentPopularMovieOrShowAction,
  GetMovieAndShowGenresAction 
} from '../../interfaces/tmdb'

export enum ActionTypes {
  GET_POPULAR_MOVIES_AND_SHOWS = 'GET_POPULAR_MOVIES_AND_SHOWS',
  GET_TOP_RATED_MOVIES_AND_SHOWS = 'GET_TOP_RATED_MOVIES_AND_SHOWS',
  GET_MOVIE_AND_SHOW_GENRES = 'GET_MOVIE_AND_SHOW_GENRES',
  SET_CURRENT_POPULAR_MOVIE_OR_SHOW = 'SET_CURRENT_POPULAR_MOVIE_OR_SHOW'
}

export type Action = 
GetPopularMoviesAndShowsAction |
GetTopRatedMoviesAndShowsAction |
SetCurrentPopularMovieOrShowAction | 
GetMovieAndShowGenresAction