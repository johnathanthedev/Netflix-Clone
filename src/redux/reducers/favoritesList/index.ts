import { ActionTypes } from '../../types/favoritesList'
import { Action as FavoritesListAction } from '../../types/favoritesList'

export const favoritesListReducer = (state: any = [], action: FavoritesListAction) => {
  switch(action.type) {
    case ActionTypes.GET_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: action.payload
      }
    case ActionTypes.ADD_ITEM_TO_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: [...state.favoritesList, action.payload]
      }
    default:
      return state;
  }
}