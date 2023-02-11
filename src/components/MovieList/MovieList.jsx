import PropTypes from 'prop-types';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 18px;
`;

function MovieList({ movies, location }) {
  return (
    <StyledList>
      {movies.map(movie => {
        return (
          <MovieListItem key={movie.id} movie={movie} location={location} />
        );
      })}
    </StyledList>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
};

export default MovieList;
