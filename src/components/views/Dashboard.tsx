import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import View from '../../interfaces/main/view'
import Nav from '../main/Nav'
import { getPopularMoviesAndShows } from '../../redux/actions/tmdb'

const Dashboard: React.FunctionComponent<View> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMoviesAndShows())
  }, [dispatch])

  const LogoutButton = () => {
    const { logout} = useAuth0();
    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    );  
  }

  return (
    <div>
      <Nav/>
      Dashboard
      <div>
        <LogoutButton/>
      </div>
    </div>
  )
}

export default Dashboard
