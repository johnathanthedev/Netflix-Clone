import { combineReducers } from 'redux'
import { tmdbReducer } from './tmdb'
import { IMovie, IShow } from '../../interfaces/tmdb'

export interface StoreState {
  popularMoviesAndShows: { 
    "movies": IMovie[],
    "shows": IShow[] 
  }   
}

export const reducers = combineReducers<StoreState>({
  popularMoviesAndShows: tmdbReducer
})