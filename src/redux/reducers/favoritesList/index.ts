import { ActionTypes } from '../../types/favoritesList'
import { Action as FavoritesListAction } from '../../types/favoritesList'

export const favoritesListReducer = (state: any = [], action: FavoritesListAction) => {
  switch(action.type) {
    case ActionTypes.GET_FAVORITES_LIST:
      return {
        ...state,
        list: action.payload
      }
    case ActionTypes.ADD_ITEM_TO_FAVORITES_LIST:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case ActionTypes.REMOVE_ITEM_FROM_FAVORITES_LIST:
      return {
        list: [
          ...state.list.filter((item: any) => item.id !== action.payload)
        ]
      }
    default:
      return state;
  }
}