import axios from 'axios';

// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9419a46407ab6d0a86a089cd8749b3b7';

export const fetchMovies = async (queryType, mediaType, timeWindow, query) => {
  const response = await axios.get(
    `/${queryType}/${mediaType}/${timeWindow}?api_key=${API_KEY}`
  );
  // console.log(response);
  return response.data;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response;
};
