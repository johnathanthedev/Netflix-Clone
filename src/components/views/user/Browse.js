import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMoviesAndShows,
  getTopRatedMoviesAndShows,
  setCurrentPopularMovieOrShow,
  getMoviesAndShowsGenres,
} from "../../../redux/actions/tmdb";
import { useAuth0 } from "@auth0/auth0-react";

const Browse = () => {
  const dispatch = useDispatch();
  const tmdbState = useSelector((state) => state.tmdb);
  // const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    dispatch(getPopularMoviesAndShows());
    dispatch(getMoviesAndShowsGenres());
    dispatch(getTopRatedMoviesAndShows());
  }, [dispatch]);

  useEffect(() => {
    if (tmdbState.popularMoviesAndShows.movies.length) {
      console.log(tmdbState.popularMoviesAndShows.movies[0].videos);
    }
  }, [tmdbState]);

  const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
      <div>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Browse</h1>
      <LogoutButton />
    </div>
  );
};

export default Browse;
