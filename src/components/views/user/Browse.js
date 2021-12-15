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
    dispatch(getMoviesAndShowsGenres());
    dispatch(getPopularMoviesAndShows());
    dispatch(getTopRatedMoviesAndShows());
  }, [dispatch]);

  useEffect(() => {
    tmdbState.popularMoviesAndShows.movies.length &&
      (() => {
        const popularMoviesAndShowsObj = {};
        popularMoviesAndShowsObj.movies =
          tmdbState.popularMoviesAndShows.movies;
        popularMoviesAndShowsObj.shows = tmdbState.popularMoviesAndShows.shows;
        dispatch(setCurrentPopularMovieOrShow(popularMoviesAndShowsObj));
      })();
  }, [
    dispatch,
    tmdbState.popularMoviesAndShows.movies,
    tmdbState.popularMoviesAndShows.shows,
  ]);

  const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
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
