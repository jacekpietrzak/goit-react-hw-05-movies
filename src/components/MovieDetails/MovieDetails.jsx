import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from 'Services/Api';

import MovieCard from 'components/MovieCard/MovieCard';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Loading from 'components/Loading/Loading';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [movieReleaseDate, setMovieReleaseDate] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieOverview, setMovieOverview] = useState('');
  const [movieGenres, setMovieGenres] = useState([]);
  const [moviePoster, setMoviePoster] = useState('');
  const [MovieUserScore, setMovieUserScore] = useState(0);

  const [backLinkHref, setBackLinkHref] = useState('');

  useEffect(() => {
    setBackLinkHref(location.state?.from ?? '/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const loadMovieDetails = async () => {
    setIsLoading(true);
    try {
      const response = await getMovieById(movieId);
      setMovieReleaseDate(response.release_date);
      setMovieTitle(response.title);
      setMovieOverview(response.overview);
      setMovieGenres(response.genres);
      setMoviePoster(
        `https://image.tmdb.org/t/p/w500/${response.poster_path}` ===
          'https://image.tmdb.org/t/p/w500/null'
          ? 'https://via.placeholder.com/150'
          : `https://image.tmdb.org/t/p/w500/${response.poster_path}`
      );
      setMovieUserScore(response.vote_average);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <>
      <div>
        <Link to={backLinkHref}>Go Back</Link>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MovieCard
            moviePoster={moviePoster}
            movieTitle={movieTitle}
            movieReleaseDate={movieReleaseDate}
            MovieUserScore={MovieUserScore}
            movieOverview={movieOverview}
            movieGenres={movieGenres}
          />
          <hr />
          <AdditionalInfo />
          <hr />
          <Suspense fallback={<Loading text={'subpage'} />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetails;
