import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'Services/Api';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  // console.log('Movie Details, location:', location);
  // console.log('Movie Details, movieId:', movieId);

  const [isLoading, setIsLoading] = useState(false);
  const [movieReleaseDate, setMovieReleaseDate] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieOverview, setMovieOverview] = useState('');
  const [movieGenres, setMovieGenres] = useState([]);
  const [moviePoster, setMoviePoster] = useState('');
  const [MovieUserScore, setMovieUserScore] = useState('');

  // const releaseDate = movieDetails.release_date;
  // // const releaseDateYear = releaseDate.substring(0, 4);

  const loadMovieDetails = async () => {
    setIsLoading(true);
    try {
      const response = await getMovieById(movieId);
      console.log('movie details response:', response.data);
      setMovieReleaseDate(response.data.release_date);
      setMovieTitle(response.data.title);
      setMovieOverview(response.data.overview);
      setMovieGenres(response.data.genres);
      setMoviePoster(response.data.poster_path);
      setMovieUserScore(response.data.vote_average);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovieDetails();
  }, []);

  return (
    <>
      <div>
        <Link to={location.state.from.pathname}>Go Back</Link>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
            alt="movieTitle"
          />
          <h2>
            {movieTitle} ({movieReleaseDate})
          </h2>
          <p>User Score: {MovieUserScore}</p>
          <h2>Overview</h2>
          <p>{movieOverview}</p>
          <h2>Genres</h2>
          <ul>
            {movieGenres.map(genre => {
              return <li key={genre.id}> {genre.name}</li>;
            })}
          </ul>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <section>
            <Outlet />
          </section>
          done
        </>
      )}
    </>
  );
}

export default MovieDetails;
