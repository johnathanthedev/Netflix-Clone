import axios from 'axios';
import { Dispatch } from 'redux'
import { netflix_clone_api } from '../../../config/constants/main';
import { IFavoriteItem } from '../../../interfaces/favoritesList';
import { ActionTypes } from '../../types/favoritesList'

export const getFavoritesList = (auth_string: string) => {
  return async (dispatch: Dispatch) => {
    const user_favorites_list_response = await axios.get(`${netflix_clone_api}/user_favorite_movies`, {
      headers: {
        Authorization: auth_string
      }
    })

    const favorites_list_res = user_favorites_list_response.data
    const favorites_list:IFavoriteItem[] = []

    if (favorites_list_res instanceof Array) {
      favorites_list_res.map(favorite_item => {
        return favorites_list.push(favorite_item)
      })
    }

    dispatch({
      type: ActionTypes.GET_FAVORITES_LIST,
      payload: favorites_list
    })
  }
}