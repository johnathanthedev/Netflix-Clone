import { combineReducers } from 'redux'
import { tmdbReducer } from './tmdb'
import { IGenre, IMovie, IShow } from '../../interfaces/tmdb'

export interface StoreState {
  moviesAndShows: { 
    "movies": IMovie[],
    "shows": IShow[],
    "currentPopular": IMovie | IShow,
    "topMovies": IMovie[],
    "topShows": IShow[],
    "movieGenres": IGenre[],
    "showGenres": IGenre[]
  }   
}

export const reducers = combineReducers<StoreState>({
  moviesAndShows: tmdbReducer
})