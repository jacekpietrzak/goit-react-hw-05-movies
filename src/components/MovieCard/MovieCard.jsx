import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMovieCard = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
`;

const StyledMovieThumb = styled.img`
  display: block;
  max-height: 350px;
`;

const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledGenresList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  list-style: none;
`;

function MovieCard({
  moviePoster,
  movieTitle,
  movieReleaseDate,
  MovieUserScore,
  movieOverview,
  movieGenres,
}) {
  return (
    <StyledMovieCard>
      <StyledMovieThumb src={moviePoster} alt={movieTitle} />
      <StyledMovieDetails>
        <h2>
          {movieTitle} ({movieReleaseDate.slice(0, 4)})
        </h2>
        <p>User Score: {MovieUserScore}%</p>
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
  );
}

MovieCard.propTypes = {
  moviePoster: PropTypes.string,
  movieTitle: PropTypes.string,
  movieReleaseDate: PropTypes.string,
  MovieUserScore: PropTypes.number,
  movieOverview: PropTypes.string,
  movieGenres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default MovieCard;
