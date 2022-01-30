export const getVideos = (movieOrShowObj) => {
  switch (movieOrShowObj.movie_or_show) {
    case "movie":
      const movie_videos_url = `${process.env.REACT_APP_TMDB_API_V3}/movie/${movieOrShowObj.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`; // make service for page no.
      return fetch(`${movie_videos_url}`)
        .then((response) => response.json())
        .then((data) => {
          return data.results;
        });
    case "show":
      const tv_videos_url = `${process.env.REACT_APP_TMDB_API_V3}/tv/${movieOrShowObj.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`; // make service for page no.
      return fetch(`${tv_videos_url}`)
        .then((response) => response.json())
        .then((data) => {
          return data.results;
        });
    default:
      break;
  }
};
