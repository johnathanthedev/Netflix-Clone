import { ActionTypes } from '../../redux/types'
export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number,
  name: string
}

export interface IPopMovieRes {
  page: number;
  results: {
    [index: number]: IMovie;
  }
  total_pages: number;
  total_results: number;
}

export interface IPopShowRes {
  page: number;
  results: {
    [index: number]: IShow;
  }
  total_pages: number;
  total_results: number;
}

export interface IGenreRes {
  genres: {
    [index: number]: IGenre;
  }
}

export interface GetPopularMoviesAndShowsAction {
  type: ActionTypes.GET_POPULAR_MOVIES_AND_SHOWS;
  payload: { 
    "movies": IMovie[],
    "shows": IShow[] 
  }
}

export interface GetTopRatedMoviesAndShowsAction {
  type: ActionTypes.GET_TOP_RATED_MOVIES_AND_SHOWS;
  payload: { 
    "topMovies": IMovie[],
    "topShows": IShow[] 
  }
}

export interface GetMovieAndShowGenresAction {
  type: ActionTypes.GET_MOVIE_AND_SHOW_GENRES;
  payload: {
    "movieGenres": IGenre[],
    "showGenres": IGenre[]
  }
}

export interface SetCurrentPopularMovieOrShowAction {
  type: ActionTypes.SET_CURRENT_POPULAR_MOVIE_OR_SHOW,
  payload: IMovie | IShow
}