import axios from 'axios';
import { Dispatch } from 'redux'

export const getFavoritesList = () => {
  return async (dispatch: Dispatch) => {
    const user_favorites_list_response = await axios.get('http://localhost:3000/user_favorite_movies')
    
  }
}