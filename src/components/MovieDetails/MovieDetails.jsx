import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'Services/Api';
import {
  StyledMovieThumb,
  StyledMovieCard,
  StyledMovieDetails,
  StyledGenresList,
  StyledList,
  StyledInfo,
} from './MovieDetails.styled';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();

  console.log('Location:', location);

  const [isLoading, setIsLoading] = useState(false);
  const [movieReleaseDate, setMovieReleaseDate] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieOverview, setMovieOverview] = useState('');
  const [movieGenres, setMovieGenres] = useState([]);
  const [moviePoster, setMoviePoster] = useState('');
  const [MovieUserScore, setMovieUserScore] = useState('');

  // const backLinkHref = location.state?.from ?? '/movies';
  const backLinkHref = location.state?.from ?? '/movies';
  console.log('backLinkHref', backLinkHref);

  // const releaseDate = movieDetails.release_date;
  // // const releaseDateYear = releaseDate.substring(0, 4);

  const loadMovieDetails = async () => {
    setIsLoading(true);
    try {
      const response = await getMovieById(movieId);
      // console.log('movie details response:', response.data)
      setMovieReleaseDate(response.release_date);
      setMovieTitle(response.title);
      setMovieOverview(response.overview);
      setMovieGenres(response.genres);
      setMoviePoster(`https://image.tmdb.org/t/p/w500/${response.poster_path}`);
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
        <div>Loading...</div>
      ) : (
        <>
          <StyledMovieCard>
            <StyledMovieThumb src={moviePoster} alt="movieTitle" />
            <StyledMovieDetails>
              <h2>
                {movieTitle} ({movieReleaseDate})
              </h2>
              <p>User Score: {MovieUserScore}</p>
              <div>
                <h3>Overview</h3>
                <p>{movieOverview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                <StyledGenresList>
                  {movieGenres.map(genre => {
                    return <li key={genre.id}> {genre.name}</li>;
                  })}
                </StyledGenresList>
              </div>
            </StyledMovieDetails>
          </StyledMovieCard>
          <hr />
          <StyledInfo>
            <p>Additional information</p>
            <StyledList>
              <li>
                <Link to="cast" state={{ from: location }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: location }}>
                  Reviews
                </Link>
              </li>
            </StyledList>
          </StyledInfo>
          <hr />
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
}

export default MovieDetails;
