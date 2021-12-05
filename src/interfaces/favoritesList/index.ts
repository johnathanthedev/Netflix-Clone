import { ActionTypes } from '../../redux/types/favoritesList'

export interface IFavoriteItem {
  id: number,
  title: string,
  movie_poster_urls: string[],
  overview: string,
  genre_ids: string[],
  tmdb_id: number,
  trailer_urls: string[],
  created_at: string,
  updated_at: string,
  auth0_user_id: string
}

export interface GetFavoritesListAction {
  type: ActionTypes.GET_FAVORITES_LIST,
  payload: IFavoriteItem[]
}