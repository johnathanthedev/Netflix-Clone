import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import View from '../../interfaces/main/view'
import Nav from '../main/Nav'
import { getPopularMoviesAndShows } from '../../redux/actions/tmdb'
import { getFavoritesList, addItemToFavoritesList, removeItemFromFavoritesList } from '../../redux/actions/favoritesList'

const Dashboard: React.FunctionComponent<View> = (props) => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    dispatch(getPopularMoviesAndShows())
    const getUserMetadata = async () => {
      const token = await getAccessTokenSilently()
      const authString = `Bearer ${token}`
      dispatch(getFavoritesList(authString))
    }
    getUserMetadata()
  }, [dispatch, getAccessTokenSilently])

  const LogoutButton = () => {
    const { logout} = useAuth0();
    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    );  
  }

  const CreateFavoriteItemButton = () => {
    const handleCreateFavoriteItem = async () => {
      const token = await getAccessTokenSilently()
      const authString = `Bearer ${token}`

      const generic_fav_item_obj = {
        "title": "Title of a movie 001",
        "movie_poster_urls": [
          "posterurl.com/image.jpg"
        ],
        "overview": "A summary of the movie/show",
        "tmdb_id": 10021,
        "trailer_urls": [
          "123abc.com/video",
          "456def.com/video"
        ],
        "auth0_user_id": "1234usr@gmail.com",
        "genre_ids": [
          "1121",
          "3312"
        ]
      }

      dispatch(addItemToFavoritesList(authString, generic_fav_item_obj))
    }
    return (
      <button onClick={handleCreateFavoriteItem}>Create generic favorite item</button>
    )
  }

  const RemoveFavoriteItemButton = () => {
    const handleRemoveFavoriteItem = async () => {
      const token = await getAccessTokenSilently()
      const authString = `Bearer ${token}`
      const favItemID = 10

      dispatch(removeItemFromFavoritesList(authString, favItemID))
    }
    return (
      <button onClick={handleRemoveFavoriteItem}>Remove favorite item</button>
    )
  }

  return (
    <div>
      <Nav/>
      Dashboard
      <div>
        <LogoutButton/>
        <CreateFavoriteItemButton/>
        <RemoveFavoriteItemButton/>
      </div>
    </div>
  )
}

export default Dashboard