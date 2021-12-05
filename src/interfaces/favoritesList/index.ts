import { ActionTypes } from '../../redux/types/favoritesList'

export interface IFavoriteItem {
  title: string,
  movie_poster_urls: string[],
  overview: string,
  genre_ids: string[],
  tmdb_id: number,
  trailer_urls: string[],
  auth0_user_id: string
}

export interface GetFavoritesListAction {
  type: ActionTypes.GET_FAVORITES_LIST,
  payload: IFavoriteItem[]
}