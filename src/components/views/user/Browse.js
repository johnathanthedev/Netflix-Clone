import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMoviesAndShows,
  getTopRatedMoviesAndShows,
  setCurrentPopularMovieOrShow,
  getMoviesAndShowsGenres,
} from "../../../redux/actions/tmdb";
import { getFavoritesList } from "../../../redux/actions/netflixClone";
import { useAuth0 } from "@auth0/auth0-react";
import GeneralObjectHelper from "../../../helpers/generalObjectHelper";
import GeneralArrayHelper from "../../../helpers/generalArrayHelper";

const Browse = () => {
  const dispatch = useDispatch();
  const tmdbState = useSelector((state) => state.tmdb);
  const { getAccessTokenSilently } = useAuth0();
  const popular_movies_length = tmdbState.popularMoviesAndShows.movies.length;
  const popular_shows_length = tmdbState.popularMoviesAndShows.shows.length;

  useEffect(() => {
    dispatch(getPopularMoviesAndShows());
    dispatch(getMoviesAndShowsGenres());
    dispatch(getTopRatedMoviesAndShows());
  }, [dispatch]);

  useEffect(() => {
    if (popular_movies_length & popular_shows_length) {
      const popular_movies = tmdbState.popularMoviesAndShows.movies;
      const popular_shows = tmdbState.popularMoviesAndShows.shows;
      const popularMoviesAndShowsObj = {
        movies: popular_movies,
        shows: popular_shows,
      };
      const generalObjectHelper = new GeneralObjectHelper(
        popularMoviesAndShowsObj
      );
      const randomProperty = generalObjectHelper.randomPropertySelector();
      const generalArrayHelper = new GeneralArrayHelper(randomProperty);
      const item = generalArrayHelper.randomElementSelector();

      dispatch(setCurrentPopularMovieOrShow(item));
    }

    const getUserMetadata = async () => {
      try {
        const token = await getAccessTokenSilently();
        const authString = `Bearer ${token}`;
        dispatch(getFavoritesList(authString));
      } catch (error) {
        console.log(error);
      }
    };
    getUserMetadata();
  }, [
    popular_movies_length,
    popular_shows_length,
    tmdbState.popularMoviesAndShows.movies,
    tmdbState.popularMoviesAndShows.shows,
    dispatch,
    getAccessTokenSilently,
  ]);

  // const LogoutButton = () => {
  //   const { logout } = useAuth0();
  //   return (
  //     <div>
  //       <button onClick={() => logout({ returnTo: window.location.origin })}>
  //         Log Out
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <div>
      <h1>Browse</h1>
      {/* <LogoutButton /> */}
    </div>
  );
};

export default Browse;
