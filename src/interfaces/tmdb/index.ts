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

export interface IPopMovieRes {
  page: number;
  results: {
    [index: number]: IMovie;
  }
  total_pages: number;
  total_results: number;
}

export interface GetPopularMoviesAndShowsAction {
  type: ActionTypes.GET_POPULAR_MOVIES_AND_SHOWS;
  payload: IMovie[]
}