import { combineReducers } from 'redux'
import { tmdbReducer } from './tmdb'
import { IMovie } from '../../interfaces/tmdb'

export interface StoreState {
  moviesAndShows: IMovie[]
}

export const reducers = combineReducers<StoreState>({
  moviesAndShows: tmdbReducer
})