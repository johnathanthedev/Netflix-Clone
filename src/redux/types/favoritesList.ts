import { 
  AddItemToFavoritesList,
  GetFavoritesListAction,
  RemoveItemFromFavoritesList, 
} from '../../interfaces/favoritesList'

export enum ActionTypes {
  GET_FAVORITES_LIST = 'GET_FAVORITES_LIST',
  ADD_ITEM_TO_FAVORITES_LIST = 'ADD_ITEM_TO_FAVORITES_LIST',
  REMOVE_ITEM_FROM_FAVORITES_LIST = 'REMOVE_ITEM_FROM_FAVORITES_LIST'
}

export type Action = 
GetFavoritesListAction | 
AddItemToFavoritesList |
RemoveItemFromFavoritesList