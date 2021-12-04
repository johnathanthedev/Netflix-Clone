import { combineReducers } from 'redux'
import { tmdbReducer } from './tmdb'
import { IMovie, IShow } from '../../interfaces/tmdb'

export interface StoreState {
  moviesAndShows: { 
    "popularMovies": IMovie[],
    "popularShows": IShow[],
    "currentPopular": IMovie | IShow
  }   
}

export const reducers = combineReducers<StoreState>({
  moviesAndShows: tmdbReducer
})