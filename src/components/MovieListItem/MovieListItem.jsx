import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieListItem({ movie, location }) {
  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link>
    </li>
  );
}

MovieListItem.propTypes = {
  location: PropTypes.object,
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default MovieListItem;
