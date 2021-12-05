import { ActionTypes } from '../../types/favoritesList'
import { Action as FavoritesListAction } from '../../types/favoritesList'

export const favoritesListReducer = (state: any = [], action: FavoritesListAction) => {
  switch(action.type) {
    case ActionTypes.GET_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: action.payload
      }
    default:
      return state;
  }
}