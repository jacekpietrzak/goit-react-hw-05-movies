import { useState, useEffect } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { getMovie } from 'Services/Api';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query' ?? '');

  const handleInputChange = event => {
    const query = event.target.value;
    setInputValue(query);
    updateQueryString(query);
  };

  const loadMovie = async () => {
    setIsLoading(true);
    try {
      const response = await getMovie(movieName);
      setMovies(response.data.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    loadMovie();
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName !== null) {
      loadMovie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
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

export default Movies;
