import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'Services/Api';
import MovieList from 'components/MovieList/MovieList';
import Loading from 'components/Loading/Loading';

function Home() {
  const queryType = 'trending';
  const mediaType = 'movie';
  const timeWindow = 'day';
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const loadMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetchMovies(queryType, mediaType, timeWindow);
      setMovies(response.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <MovieList movies={movies} location={location} />
      )}
    </>
  );
}

export default Home;
