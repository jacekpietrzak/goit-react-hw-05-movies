import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9419a46407ab6d0a86a089cd8749b3b7';

export const fetchMovies = async (queryType, mediaType, timeWindow) => {
  const response = await axios.get(
    `/${queryType}/${mediaType}/${timeWindow}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCreditsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieReviewsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response;
};

export const getMovie = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response;
};
