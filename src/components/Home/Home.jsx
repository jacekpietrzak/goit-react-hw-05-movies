import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchMovies } from 'Services/Api';

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
      // console.log('response from home:', response);
      setMovies(response.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  // console.log('movies from home:', movies);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Home;
