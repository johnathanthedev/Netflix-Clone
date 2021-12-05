import { combineReducers } from 'redux'
import { tmdbReducer } from './tmdb'
import { favoritesListReducer } from './favoritesList'
import { IGenre, IMovie, IShow } from '../../interfaces/tmdb'
import { IFavoriteItem } from '../../interfaces/favoritesList'
export interface StoreState {
  moviesAndShows: { 
    "movies": IMovie[],
    "shows": IShow[],
    "currentPopular": IMovie | IShow,
    "topMovies": IMovie[],
    "topShows": IShow[],
    "movieGenres": IGenre[],
    "showGenres": IGenre[],
  },
  favoritesList: {
    "list": IFavoriteItem[]
  }
}

export const reducers = combineReducers<StoreState>({
  moviesAndShows: tmdbReducer,
  favoritesList: favoritesListReducer
})