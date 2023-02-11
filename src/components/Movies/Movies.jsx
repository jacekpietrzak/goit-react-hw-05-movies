import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from 'Services/Api';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';
import Loading from 'components/Loading/Loading';

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
    if (movieName !== null) {
      loadMovie();
    } else {
      alert('type something');
    }
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
      <Searchbar
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <MovieList movies={movies} location={location} />
      )}
    </>
  );
}

export default Movies;
